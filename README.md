# vanilla-webpack-template

## Introduction

This repository provides a Webpack template for modern JavaScript development. It includes configurations for building and optimizing your application using Webpack, Babel, ESLint, and Prettier.

## Getting Started

### Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/oshudev/vanilla-webpack-template
cd your-repository
```

### Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### Project Structure

Here's an overview of the project structure:

```
├── src/
│   ├── index.html
│   ├── index.js
│   ├── style.scss
│   └── style.scss
├── README.md
├── babel.config.json
├── eslint.config.mjs
├── package-lock.json
├── package.json
├── prettier.config.mjs
└── webpack.config.mjs
```

### Development Mode

To start the development server with live reloading, use:

```bash
npm run serve
```

This command starts the Webpack development server and watches for file changes.

### Production Mode

To build the application for production, use:

```bash
npm run build
```

This command creates optimized files in the dist/ directory.

### Configuration

- `Webpack Configuration`: Modify webpack.config.mjs to customize your build process.
- `Babel Configuration`: Adjust babel.config.json for JavaScript features and syntax transformations.
- `ESLint Configuration`: Edit eslint.config.mjs for linting rules and settings.
- `Prettier Configuration`: Configure code formatting in prettier.config.mjs.
