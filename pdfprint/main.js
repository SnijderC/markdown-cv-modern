const { app, BrowserWindow } = require("electron");
// import {JSDOM} from "jsdom";
const path = require("path");
const fs = require("fs");

const INPUT_FILE = "../build/index.html";

// const dom = new JSDOM(fs.readFileSync(INPUT_FILE));

let outPath = path.join("..", "build", "static", "files");
fs.mkdirSync(outPath, {recursive: true});

// let filename = dom.window.document.querySelector("nav a[href$='.pdf']").href;
// filename = filename.split("/").pop();
// let outputFile = path.join(outPath, filename);

// console.log(`Printing to ${outputFile}`);

function createWindow() {
  // Create the browser window.
  const window = new BrowserWindow({
    width: 1280,    "jsdom": "^16.4.0",

    height: 720,
  });
  // and load the index.html of the app.
  window.loadFile(INPUT_FILE);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  window.webContents.on("did-finish-load", () => {
    // Get the filename from the pdf download link.
    const getFilename = `document.querySelector("nav a[href$='.pdf']").href`;

    window.webContents.executeJavaScript(getFilename).then((filename) => {
      filename = filename.split("/").pop();
      let outputFile = path.join(outPath, filename);
      console.log(`Outputting "printed" PDF to ${outputFile}`);

      // Use default printing options
      window.webContents
        .printToPDF({})
        .then((data) => {
          fs.writeFile(outputFile, data, (error) => {
            if (error) throw error;
            console.log(`Wrote PDF successfully to ${outputFile}`);
          });
        })
        .catch((error) => {
          console.log(`Failed to write PDF to ${outputFile}`, error);
        })
        .then(() => {
          app.quit();
        });
    });
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
});
