# markdown-cv-modern

Curriculum vitae written in Markdown, compiled to HTML with modern CSS (grid
based) and converted to PDF. You can optionally use github actions to push it to
a github.io site, or a self hosted location via rsync.

## Requirements

You need to have Docker installed, I recommend
https://docs.docker.com/engine/security/rootless/ on Linux systems because it
eliminates the need to run containers are root.

If you decide to use rootless, need to add a `.env` file in the root of the 
project and put `JEKYLL_ROOTLESS=yes` in it. If not, you can just continue 
with the next chapter.

## Make it your own..

1. [Fork markdown-cv-modern](https://github.com/snijderc/markdown-cv-modern)
2. Run:

   ```bash
   make serve
   ```

   This will run a local server on http://localhost:4000 whee you can see your
   CV, and it will update immediately as you save any files.

3. Edit `index.md` to contain your work experience, skill, contact info, etc. 

## Important stuff

Take care following the exact structure as it is targeted by the CSS selectors.
You can't just delete the definition lists and expect the horizontal unordered
lists to still work. This is rather rigid, but it's the only way to have 
somewhat advanced formatting with a Markdown source file.

## Generating output

Clean up build files:

```bash
make clean
```

Generate the site (HTML and CSS) from the source files:

```bash
make build
```

You can host this anywhere you can host static files.

You will have to change the `deploy.sh` file to do what you need it to, to put
the static files on a server.

```bash
make publish
```
