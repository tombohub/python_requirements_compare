# Repository Guidelines

## Project Structure & Module Organization
The app is a Vite + React TypeScript UI for comparing two `requirements.txt` inputs. Application code lives in `src/` with entry `main.tsx` bootstrapping `App.tsx`. UI atoms and containers sit under `src/components/` (e.g., `Header.tsx`, `Body.tsx`, `Main.tsx`). Domain logic for parsing and diffing requirements is in `domain.ts` and helpers in `utils.ts`. Client-side state sits in `store.ts` using Jotai atoms. Place new UI assets in `public/` for Vite to serve statically. `node_modules/` and build artifacts are generated; never edit them directly.

## Build, Test, and Development Commands
- `yarn install` - sync dependencies listed in `package.json` / `yarn.lock`.
- `yarn dev` - run the hot-reloading dev server on the default Vite port (5173); ideal for iterative UI work.
- `yarn build` - type-check via `tsc` and create an optimized production bundle in `dist/`.
- `yarn preview` - serve the production build locally to verify release behavior.

## Coding Style & Naming Conventions
Use TypeScript throughout; prefer functional React components with hooks. Component files are PascalCase (`Body.tsx`), while utilities and atoms use camelCase exports. Keep indenting to two spaces and rely on Prettier defaults via your editor to match the existing format. Derive prop and state types rather than using `any`; colocate interfaces with the component that consumes them. Keep modules focused; split shared logic into `utils.ts` or new helpers under `src/`.

## Testing Guidelines
Automated tests are not yet configured, so describe the manual scenarios you exercised (inputs compared, edge cases) in your PR. When introducing complex parsing or diff behavior, add lightweight unit tests under `src/__tests__/` using Vitest (`yarn add -D vitest @testing-library/react`) and document how to run them (`yarn vitest`). Aim for meaningful coverage on parsing utilities and reducers before merging.

## Commit & Pull Request Guidelines
Follow Conventional Commit semantics seen in history (`refactor: ...`, `remove ...`). Keep subjects imperative and under 72 characters. Each PR should link to any tracked issue, summarize the change set, list manual/automated test evidence, and attach before/after screenshots for UI updates. Request review once CI (if configured) is green and resolve feedback promptly.
