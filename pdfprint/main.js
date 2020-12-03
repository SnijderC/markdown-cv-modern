// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("path");
const fs = require("fs");

function createWindow() {
  // Create the browser window.
  const window = new BrowserWindow({
    width: 1280,
    height: 720,
  });
  // and load the index.html of the app.
  window.loadFile("../build/index.html");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  window.webContents.on("did-finish-load", () => {
    // Get the filename from the pdf download link.
    const getFilename = `document.querySelector("nav a[href$='.pdf']").href`;

    window.webContents.executeJavaScript(getFilename).then((filename) => {
      filename = filename.split("/").pop();
      filename = path.join("..", "build", "static", "files", filename);
      console.log(`Outputting "printed" PDF to ${filename}`);

      // Use default printing options
      window.webContents
        .printToPDF({})
        .then((data) => {
          fs.writeFile(filename, data, (error) => {
            if (error) throw error;
            console.log(`Wrote PDF successfully to ${filename}`);
          });
        })
        .catch((error) => {
          console.log(`Failed to write PDF to ${filename}: `, error);
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
