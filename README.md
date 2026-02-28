# JS Code Library & Playground

Welcome to the **JS Code Library & Playground**!

This application serves as an interactive playground and central repository for learning, testing, and documenting core coding concepts, data structures, and algorithms.

## Purpose

The primary goal of this project is to provide a clean, intuitive, and dynamic environment where you can:
- **Explore Core Concepts**: Browse through categorized snippets of fundamental algorithms (e.g., Tree Traversals like BFS/DFS, Array manipulations, etc.).
- **Interactive Execution**: Test the code snippets on the fly against editable JSON arguments in a customized sandbox.
- **Learn & Document**: Each snippet is paired with documentation on its use cases and implementation details to help solidify understanding.

## Features

- **Three-Column Layout**: 
  - A navigation sidebar on the left to browse categories and snippets.
  - A central interactive workspace for live code definition and JSON argument execution.
  - A persistent right-hand panel detailing the purpose and description of the selected algorithm.
- **Live Syntax Highlighting**: Editing functional JavaScript and JSON models directly with `prismjs` powered highlights.
- **Dynamic Output**: Safely intercepting console logs and return values directly on the page.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Live Demo

View the live application at: https://AMilburn.github.io/code-library

## Tech Stack
- React
- Vite
- Vanilla CSS
- `lucide-react` for icons
- `react-simple-code-editor` and `prismjs` for syntax highlighting
