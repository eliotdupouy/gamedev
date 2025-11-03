# gamedev

A React-based game development project built with Vite.

## Setup

Install dependencies:
```bash
npm install
```

## Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173/gamedev/`

## Building

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to a static web server.

## Deployment

The project is configured for GitHub Pages deployment with the base path `/gamedev/`.

When deploying, make sure to deploy the contents of the `dist/` directory (after running `npm run build`).

## MIME Type Fix

This project uses Vite to properly handle JSX files. During the build process, Vite transpiles all JSX code into standard JavaScript modules, which prevents MIME type errors that would occur if `.jsx` files were served directly by a static web server.

The development server also handles JSX files correctly through Vite's built-in support.
