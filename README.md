# HealthGen

HealthGen is a responsive website for the HealthGen Android app, a smart health companion that helps people organize everyday health information and build healthier routines.

**Live website:** [healthgen.codecraftor.dev](https://healthgen.codecraftor.dev)

## Credits

- **Created by:** Arafat Islam
- **App owner:** CodeCraftor

## About the project

The site introduces the HealthGen app, explains its features, and provides a direct download of the Android APK. It is built as a single-page experience with sections for the app overview, features, benefits, privacy information, frequently asked questions, and download instructions.

## Features

- Personal health profile and health record organization
- Daily tracking for supported measurements such as blood pressure, blood sugar, and temperature
- Symptom diary with notes and history
- General AI-powered health information and next-step guidance
- General wellness tips
- Configurable medicine reminders
- Nearby hospitals, clinics, and pharmacies where map support is available
- Direct Android APK download
- Responsive layout for mobile and desktop

> HealthGen provides general health information, not a medical diagnosis or a substitute for professional medical advice. Do not use it to make decisions about changing prescribed medication or dosage.

## Download the Android app

The APK is included in the website's `public/download` directory and is available from the live site:

[Download HealthGen for Android](https://healthgen.codecraftor.dev/download/healthgen.apk)

On Android, download the APK, allow installation from your browser or file manager if prompted, then open the downloaded file and tap **Install**.

## Technology

- React 19 and TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS
- Radix UI
- Vitest and Testing Library

## Getting started

### Requirements

- Node.js and npm, or [Bun](https://bun.sh/)
- Git, if cloning the repository

### Install dependencies

```bash
git clone <repository-url>
cd health-gen-frontend
npm install
```

If you use Bun, the repository includes a Bun lockfile:

```bash
bun install
```

### Run the development server

```bash
npm run dev
```

Or with Bun:

```bash
bun run dev
```

Open the local URL printed by Vite in your terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Create a development-mode build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm test` | Run the test suite once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run format` | Format project files with Prettier |

Use `bun run <script>` in place of `npm run <script>` when working with Bun.

## Project structure

```text
public/
  download/       Android APK served as a static file
src/
  components/     Page sections and reusable UI components
  hooks/          Shared React hooks
  lib/            Site configuration and utilities
  routes/         TanStack Router pages and root route
  test/           Automated tests
```

## APK file

Place the Android APK at `public/download/healthgen.apk`. The website's shared download buttons link to `/download/healthgen.apk`; Vite serves files in `public` from the site root and includes them in the production output.

## License

No license is specified in this repository. Contact the project owner for permission before reusing or redistributing the source code or app assets.
