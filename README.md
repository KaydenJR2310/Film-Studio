# Motion Editor Starter

React + TypeScript + Vite + Tailwind + Canvas, packaged for Android with Capacitor.

- `src/types/project.ts` – Project → Layers → Keyframes → cubic-bezier easing, plus `effects[]`
- `src/engine/interpolator.ts` – keyframe math (linear + cubic Bézier)
- `src/engine/renderer.ts` – canvas renderer (blur, brightness, RGB shift)
- `src/importers/amXmlImporter.ts` – Alight Motion-style XML → Project
- `.github/workflows/build-apk.yml` – cloud APK build (Actions → Build Android APK → Artifacts → app-debug)

Local: `npm install && npm run dev`. Type-check: `npm run typecheck`.
