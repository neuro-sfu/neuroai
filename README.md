# SFU Neuro+AI website

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually:

http://localhost:5173

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages
(`.github/workflows/deploy.yml`). The build uses relative paths (`base: "./"` in
`vite.config.ts`), so it works both at `https://neuro-sfu.github.io/neuroai/` and at
the root of the custom domain `https://neuroai.sfu.ca/`.

The custom domain is set in the repository's Settings > Pages (not with a `CNAME`
file, which GitHub ignores for Actions deployments), and needs this DNS record:

```
neuroai.sfu.ca.  CNAME  neuro-sfu.github.io.
```

Contact email, contact link, and faculty bios are placeholders until confirmed. Team names, roles, profile links, and headshots should receive final stakeholder approval before public launch.
