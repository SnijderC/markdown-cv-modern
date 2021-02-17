# markdown-cv-modern

Curriculum vitae written in Markdown, compiled to HTML with modern CSS (grid
based) and converted to PDF. You can optionally use github actions to push it to
a github.io site, or a self hosted location via rsync.

## Requirements

You need to have Docker installed, I recommend
https://docs.docker.com/engine/security/rootless/ on Linux systems because it
eliminates the need to run containers are root. If you use rootless, you can
just continue with the next chapter. If not, you need to change the `.env` file
in the root of the project to disable `JEKYLL_ROOTLESS`.

## Make your own..

1. [Fork markdown-cv-modern](https://github.com/snijderc/markdown-cv-modern)
2. Run:

   ```bash
   make serve
   ```

   This will run a local server on http://localhost:4000 whee you can see your
   CV, and it will update immediately as you save any files.

3. Edit `index.md` to contain your work experience, skill, contact info, etc.


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