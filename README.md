# Python Requirements Compare

A simple web application to compare two Python `requirements.txt` files and highlight the differences between their package lists.

## Features

- Paste or type two sets of Python requirements.
- See which packages are unique to each list.
- Built with React, TypeScript, Vite, and Jotai for state management.

## Usage

1. Start the development server:
   ```pwsh
   npm install
   npm run dev
   ```
2. Open your browser to [http://localhost:5173](http://localhost:5173).
3. Paste the contents of two `requirements.txt` files into the text areas.
4. Click **Compare!** to see the differences.

## Project Structure

- `src/` — Main source code
  - `components/` — UI components (`Header`, `Body`, `Main`)
  - `utils.ts` — Comparison and parsing logic
  - `store.ts` — State management with Jotai
  - `domain.ts` — Domain models
- `public/` — Static assets
- `index.html` — Main HTML file

## Tech Stack

- React
- TypeScript
- Vite
- Jotai
- Lodash

## License

MIT
