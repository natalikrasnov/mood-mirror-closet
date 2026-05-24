# deployRocket Project Dossier

This branch is managed by deployRocket. It intentionally stores only this dossier README as machine-readable and human-readable project memory.

Generated application files are committed to the repository default branch after Codex returns a valid file set. If the default branch only has an initial README, code generation has not succeeded yet.

## Agent State

~~~deployrocket-state-json
{
  "id": "bmF0YWxpa3Jhc25vdi9tb29kLW1pcnJvci1jbG9zZXQ",
  "name": "MirrorLook",
  "summary": "A mobile-first, fullscreen “smart mirror” web app that asks your mood and destination, then opens the front camera as a clean mirror view and overlays curated outfit looks you can swipe through, regenerate, and save to a minimal closet gallery.",
  "status": "SENDING_TO_CODEX",
  "currentStep": "Submitting prompt to Codex",
  "githubRepoUrl": "https://github.com/natalikrasnov/mood-mirror-closet",
  "githubOwner": "natalikrasnov",
  "githubRepo": "mood-mirror-closet",
  "githubUserLogin": "natalikrasnov",
  "githubDefaultBranch": "main",
  "error": null,
  "createdAt": "2026-05-24T08:22:21.610Z",
  "updatedAt": "2026-05-24T08:24:10.999Z",
  "actions": [
    {
      "id": "action_af98a76b8a8b1469c85d",
      "at": "2026-05-24T08:22:21.610Z",
      "message": "Received user input",
      "level": "info",
      "status": "IDLE"
    },
    {
      "id": "action_7f25b3ad3348e787b996",
      "at": "2026-05-24T08:22:24.435Z",
      "message": "Processing user input",
      "level": "info",
      "status": "PROCESSING_INPUT"
    },
    {
      "id": "action_165dd168602fd06291cb",
      "at": "2026-05-24T08:22:26.300Z",
      "message": "GitHub workflow permission is missing.",
      "level": "error",
      "status": "FAILED"
    },
    {
      "id": "action_251facc02562b8fda73b",
      "at": "2026-05-24T08:22:58.397Z",
      "message": "Continuing failed run with previous dossier, prompt, architecture, and error context",
      "level": "warning",
      "status": "PROCESSING_INPUT"
    },
    {
      "id": "action_45406bab6e3300de9e9a",
      "at": "2026-05-24T08:23:15.775Z",
      "message": "Generated structured product requirements",
      "level": "success",
      "status": "PROCESSING_INPUT"
    },
    {
      "id": "action_47435be8ec8290465270",
      "at": "2026-05-24T08:23:18.140Z",
      "message": "Creating architecture and implementation prompt",
      "level": "info",
      "status": "GENERATING_PROMPT"
    },
    {
      "id": "action_6b849023af533dac633d",
      "at": "2026-05-24T08:23:23.304Z",
      "message": "Auto-fix agent is retrying after a GitHub write conflict",
      "level": "warning",
      "status": "GENERATING_PROMPT",
      "details": "Attempt 1 of 3.\nOriginal error: README.md does not match e7cc025419959b0be83bee2c41db6b3e8dabcb2c\nCode: GITHUB_409"
    },
    {
      "id": "action_b7b0d1dd1d6306181d3f",
      "at": "2026-05-24T08:24:06.162Z",
      "message": "Generated structured Codex prompt",
      "level": "success",
      "status": "GENERATING_PROMPT"
    },
    {
      "id": "action_0b3b529824cdbefe35ea",
      "at": "2026-05-24T08:24:08.725Z",
      "message": "Generated structured Codex prompt",
      "level": "success",
      "status": "GENERATING_PROMPT"
    },
    {
      "id": "action_5f24c55c7c2b709a1592",
      "at": "2026-05-24T08:24:10.999Z",
      "message": "Sent prompt to Codex",
      "level": "info",
      "status": "SENDING_TO_CODEX"
    }
  ],
  "inputs": [
    {
      "id": "input_46b2c94acaed71f611b2",
      "kind": "create",
      "text": "Create a mobile-first web app that works like an interactive mirror.\r\n\r\nThe main idea:\r\nThe camera should feel like a real mirror on the phone screen — fullscreen, clean, and immersive.\r\n\r\nWhen the app opens:\r\n\r\n* ask the user how they feel (options + free text)\r\n* then ask where they are going (options + free text)\r\n\r\nAfter that, open a fullscreen front camera.\r\n\r\nThe camera must behave like a mirror:\r\n\r\n* no UI layout around it\r\n* no panels\r\n* no sections\r\n* the user should feel like they are looking at themselves in a mirror\r\n\r\nOn top of the mirror:\r\n\r\n* an outfit is automatically placed on the user based on mood and destination\r\n\r\nInteraction:\r\n\r\n* swiping left/right changes the full outfit on the user\r\n* each swipe shows a different look\r\n* add a small “try again” button to generate a new outfit\r\n\r\nAdd a small floating closet button:\r\n\r\n* opens a fullscreen gallery of saved looks\r\n* selecting a look applies it instantly\r\n\r\nKeep everything minimal and visual.\r\n\r\nThe entire experience should feel like:\r\na smart mirror that helps you decide what to wear today.",
      "images": [],
      "createdAt": "2026-05-24T08:22:19.177Z",
      "structuredRequirements": {
        "projectName": "MirrorLook",
        "summary": "A mobile-first, fullscreen “smart mirror” web app that asks your mood and destination, then opens the front camera as a clean mirror view and overlays curated outfit looks you can swipe through, regenerate, and save to a minimal closet gallery.",
        "intent": "Help users quickly decide what to wear by combining a mirror-like front-camera experience with lightweight, visual outfit suggestions driven by mood and destination, with swipe-based exploration and a simple saved-looks closet.",
        "targetUsers": [
          "Mobile users choosing an outfit before leaving",
          "Users who want quick, visual outfit inspiration without heavy UI",
          "Anyone who prefers swipe-based browsing and saving favorite looks"
        ],
        "coreFeatures": [
          "Onboarding prompts: mood (preset options + free text) and destination (preset options + free text)",
          "Fullscreen front-camera mirror mode using getUserMedia with environment stripped away (no panels/sections around the camera)",
          "Mirror-like behavior: front camera preview appears as a mirror (horizontally flipped) and occupies the entire viewport",
          "Outfit overlay rendered on top of the live camera feed (visual assets bundled with the app: PNG/SVG layers) selected automatically from mood + destination",
          "Swipe left/right to switch the entire outfit (one swipe = next/previous look)",
          "Small “Try again” button to generate a new outfit suggestion set (reshuffle/reselect based on mood/destination)",
          "Floating “Closet” button opening a fullscreen gallery of saved looks",
          "Save current look to closet (stored client-side via localStorage); selecting a saved look applies it instantly on the mirror",
          "Minimal UI chrome: only essential floating controls with high contrast and unobtrusive styling",
          "Graceful permission handling: camera permission prompt, retry, and fallback messaging if unavailable/denied"
        ],
        "screens": [
          "Splash/Entry: branding + primary action to begin (optional, very brief)",
          "Mood Prompt: preset chips (e.g., Confident, Cozy, Bold, Calm, Energetic) + free-text input; Next",
          "Destination Prompt: preset chips (e.g., Work, Date, Gym, Party, Errands, Chill) + free-text input; Start Mirror",
          "Mirror Screen (primary): fullscreen front camera (mirrored) with outfit overlay, swipe navigation, small Try Again button, floating Closet button, optional Save Look control",
          "Closet Gallery (fullscreen modal): grid of saved looks; tap to apply; option to delete single look; close to return to mirror",
          "Permission/Fallback State: inline/fullscreen message with actions (Allow camera, Retry, Continue without camera using placeholder background)"
        ],
        "designDirection": "Ultra-minimal, immersive mirror-first UI: camera feed is the entire screen; overlay outfits are visually clear and centered; controls are tiny floating buttons (top/bottom corners) with subtle translucency; use swipe gestures as the primary navigation; avoid panels, cards, and persistent text—only brief labels when necessary. Overall feel: a smart mirror helping you decide what to wear today.",
        "constraints": [
          "Serverless, browser-only web app runnable from static files on GitHub Pages (no backend, no external databases, no server APIs)",
          "Camera access via WebRTC getUserMedia; must handle iOS Safari/Android Chrome permission and autoplay quirks",
          "Front camera selection should request user-facing camera where supported (facingMode: 'user'); provide fallback if not available",
          "Mirror effect must be implemented by horizontally flipping the video preview layer (CSS transform) while keeping overlays aligned",
          "Outfit generation must be client-side only: use an in-repo static catalog of outfit definitions and assets; selection logic based on mood/destination text + presets",
          "Saved looks must be stored client-side only (localStorage). If thumbnails are needed, store small metadata and/or a generated dataURL preview (with size limits and graceful degradation)",
          "No reliance on paid/secret credentials or non-static platform services",
          "Must remain usable one-handed on small screens; controls reachable and not blocking the face/torso region"
        ],
        "imageContext": [],
        "repositoryNameSuggestion": "mirrorlook"
      },
      "codexPrompt": {
        "title": "MirrorLook — Mobile-first Smart Mirror (Vite + React + TypeScript, static GitHub Pages)",
        "summary": "Build a production-oriented, mobile-first, fullscreen “smart mirror” web app. It asks mood + destination, then opens a fullscreen mirrored front-camera view with minimal floating controls. Outfit overlays are generated from a local static catalog based on mood/destination. Swipe left/right changes looks, “Try again” reshuffles suggestions, and a floating “Closet” opens a fullscreen saved-looks gallery stored in localStorage.",
        "architectureInstructions": [
          "Create a static, browser-only Vite React TypeScript app (no backend, no serverless functions).",
          "All data must be local: outfit catalog + overlay assets bundled in repo; persistence via localStorage only.",
          "Must work when deployed to GitHub Pages, including repo subpath deployments: configure Vite `base: './'` and use relative asset loading via imports.",
          "Implement a simple in-app state machine for screens (no router required). Screens: Entry (optional brief), Mood prompt, Destination prompt, Mirror, Closet modal, Permission/fallback states.",
          "Camera uses `navigator.mediaDevices.getUserMedia` with `facingMode: 'user'` when possible; handle errors and allow continuing without camera (placeholder background).",
          "Mirror effect: horizontally flip the video layer (CSS transform) while keeping overlay aligned (overlay should flip same way so it feels attached to the mirror).",
          "Primary interaction is swipe left/right to cycle looks; must support touch + mouse (pointer events).",
          "Keep UI minimal: fullscreen camera, only small floating buttons (Try again, Closet, Save, Back/Close). Avoid panels/sections around the camera.",
          "Accessibility: clear focus states, labeled buttons, readable contrast, reduced-motion support, ARIA for modal, and non-blocking text overlays.",
          "No TODOs/placeholders; provide complete, buildable files. Include README with run/build/deploy notes for GitHub Pages."
        ],
        "frontendInstructions": [
          "Use React + TypeScript functional components with hooks.",
          "Implement `useCamera` hook that starts/stops stream, selects front camera when available, exposes status (idle/loading/ready/denied/error) and error messages.",
          "Implement `useSwipe` (or similar) using pointer/touch events to detect horizontal swipe with threshold; support keyboard alternatives (left/right arrows) for accessibility.",
          "Create an outfit system: `Outfit` objects with id, name, tags (moods, destinations, vibe keywords), and layered overlay assets (SVG/PNG). Render overlays as positioned, responsive layers centered over the user (e.g., torso region).",
          "Outfit selection logic: based on chosen mood/destination (preset + free text), compute matches via tag scoring (simple keyword match) and pick a small set (e.g., 7) of suggestions; “Try again” reshuffles/regenerates a new set from same query.",
          "Mirror screen layout: `<video>` full-viewport with `object-fit: cover`, `playsInline`, `muted`, `autoPlay` (start playback after stream set). Apply `transform: scaleX(-1)` for mirroring.",
          "Overlay: absolute positioned container on top of video; ensure it scales with viewport; add slight shadow/outline for visibility.",
          "Closet: floating button opens fullscreen modal gallery. Gallery shows saved looks in a grid (render mini overlay previews using same outfit renderer at smaller size). Tap applies instantly and closes modal.",
          "Save current look: store in localStorage as an array of `{ outfitId, createdAt }`; include dedupe or allow multiples; provide delete single look in closet.",
          "Permission/fallback UI: if denied/unavailable, show minimal fullscreen message with actions: Retry camera, Continue without camera. Continue uses a subtle animated/gradient background instead of video.",
          "Polish: safe-area insets for iOS, prevent body scroll in mirror mode, handle orientation changes, respect `prefers-reduced-motion` (reduce transitions)."
        ],
        "backendInstructions": [
          "None. Do not add any backend, server APIs, database, auth, or secret handling. All behavior must be client-only using localStorage, in-memory state, and bundled static assets."
        ],
        "modificationInstructions": [
          "Return a COMPLETE REPLACEMENT FILE SET for a new repository (create mode). Include all necessary config and source files.",
          "Use Vite + React + TypeScript templates as baseline, but fully implement all features described.",
          "Avoid heavy dependencies; prefer small custom hooks/utilities. Only add dependencies if truly necessary.",
          "Ensure `npm install`, `npm run build`, and `npm run preview` work without additional steps."
        ],
        "acceptanceCriteria": [
          "App builds with `npm run build` into static assets and runs with `npm run preview`.",
          "Deployed under a subpath (GitHub Pages) works correctly (Vite base configured; assets load).",
          "On first use, user is prompted for Mood (preset + free text) and Destination (preset + free text) before mirror starts.",
          "Mirror screen is truly fullscreen and immersive: no surrounding layout; camera fills viewport; UI is limited to small floating controls.",
          "Front camera requested (`facingMode: 'user'`); video is mirrored (horizontal flip).",
          "Outfit overlay appears automatically based on mood/destination; user can swipe left/right to change looks.",
          "“Try again” generates a fresh set of suggestions from the same mood/destination inputs.",
          "User can save a look; Closet modal shows saved looks from localStorage; selecting applies instantly; deleting works.",
          "Graceful handling when camera is denied/unavailable with retry + continue-without-camera mode.",
          "Mobile-first usability: one-handed controls, safe-area padding, no accidental scroll; accessible buttons/labels and modal semantics."
        ],
        "codexPrompt": "You are Codex. Generate a complete replacement file set for a NEW repo implementing the app described below.\n\nProject: MirrorLook (Vite + React + TypeScript)\nDeployment: Static, serverless, browser-only. Must work on GitHub Pages including repository subpath deployments.\nIMPORTANT CONSTRAINTS:\n- Do NOT add backend code, server routes, serverless functions, databases, private APIs, or secrets.\n- All “backend-like” behavior must be localStorage / in-memory state / bundled static sample data.\n- No TODOs or placeholders; everything must be implemented and runnable.\n\nCore UX:\n1) On open, ask: “How do you feel?”\n   - Provide preset option chips + a free-text input.\n   - Presets example: Confident, Cozy, Bold, Calm, Energetic.\n   - Next button.\n2) Then ask: “Where are you going?”\n   - Provide preset chips + free-text input.\n   - Presets example: Work, Date, Gym, Party, Errands, Chill.\n   - Start Mirror button.\n3) After prompts, open fullscreen FRONT camera.\n   - The camera must feel like a real mirror: fullscreen, clean, immersive.\n   - No panels/sections around it.\n   - Mirror effect: horizontally flip the video.\n4) On top of the mirror:\n   - Render a full outfit overlay automatically chosen based on mood + destination.\n   - Overlay assets must be bundled with app (SVG/PNG). Keep it visually clear and centered.\n5) Interaction:\n   - Swipe left/right changes the full outfit (next/previous look).\n   - Add a small “Try again” button to regenerate a new set of outfit suggestions for the same mood/destination.\n6) Closet:\n   - Small floating “Closet” button.\n   - Opens fullscreen gallery modal of saved looks (from localStorage).\n   - Selecting a saved look applies it instantly in the mirror.\n   - Provide delete for individual saved looks.\n   - Provide a small floating “Save” control on mirror screen.\n7) Permissions:\n   - Handle camera permission prompt and errors.\n   - Provide Retry.\n   - Allow “Continue without camera” mode using a tasteful placeholder background.\n\nDesign direction:\n- Ultra-minimal, visual, mirror-first UI.\n- Camera feed fills entire viewport.\n- Controls are tiny floating buttons (top/bottom corners), subtle translucent backgrounds, high contrast.\n- Avoid persistent text; only minimal labels.\n- One-handed on small screens; do not block face/torso center.\n- Respect safe-area insets on iOS.\n\nTechnical requirements:\n- Vite config must support GitHub Pages subpath deployment: set `base: './'`.\n- Use React + TypeScript.\n- Implement custom hooks:\n  - `useCamera()` to manage getUserMedia lifecycle and status.\n  - `useSwipe()` using pointer/touch events to detect horizontal swipes (with threshold).\n- Outfit system:\n  - Create a static outfit catalog in `src/data/outfits.ts`.\n  - Each outfit: `id`, `name`, `tags` (moods/destinations/keywords), and layered assets (imported SVG/PNG) such as top/bottom/shoes/accessory.\n  - Provide ~12–20 outfits for variety using simple SVG assets you create in-repo (no external downloads).\n  - Selection algorithm: score outfits by matching mood/destination (both preset and free text tokens), pick a suggestion set (e.g., 7) and allow reshuffle.\n- Closet:\n  - Store array of saved outfit IDs + timestamps in localStorage.\n  - Closet grid renders miniature previews by reusing the same OutfitOverlay renderer in a scaled container (avoid storing big images/dataURLs).\n- Accessibility:\n  - Buttons have aria-labels.\n  - Closet is a proper modal dialog (aria-modal, focus trap or at least initial focus + ESC to close).\n  - Keyboard support: left/right arrows to change looks; Enter/Space activate focused controls.\n  - Visible focus styles.\n  - `prefers-reduced-motion` reduces transitions.\n\nImplementation details:\n- Mirror screen layout:\n  - Use a full-viewport container.\n  - `<video>` absolute, inset 0, `width/height: 100%`, `object-fit: cover`, `transform: scaleX(-1)`.\n  - Overlay container absolute inset 0, pointer-events none; inside, position outfit layers around center (torso region). Apply same mirror transform as video so it feels aligned.\n- Controls:\n  - Floating buttons with pointer-events auto.\n  - Suggested positions:\n    - Top-left: Back (to prompts) or reset.\n    - Top-right: Closet.\n    - Bottom-right: Save.\n    - Bottom-left or bottom-center: Try again.\n- Prevent page scrolling while in mirror mode.\n\nFiles to include (minimum):\n- package.json (vite/react/ts)\n- vite.config.ts (base './')\n- tsconfig.json, tsconfig.node.json\n- index.html\n- src/main.tsx\n- src/App.tsx\n- src/styles.css (global, includes safe-area handling)\n- src/hooks/useCamera.ts\n- src/hooks/useSwipe.ts\n- src/data/outfits.ts\n- src/components/OnboardingMood.tsx\n- src/components/OnboardingDestination.tsx\n- src/components/MirrorScreen.tsx\n- src/components/OutfitOverlay.tsx\n- src/components/ClosetModal.tsx\n- src/utils/storage.ts\n- src/utils/outfitSelection.ts\n- src/assets/outfits/*.svg (create multiple simple SVGs for layers)\n- README.md with run/build/deploy instructions for GitHub Pages.\n\nEnsure:\n- No external asset URLs.\n- No reliance on non-static services.\n- Works on mobile Safari/Chrome best-effort (playsInline; start camera on user gesture).\n\nOutput format:\n- Return the complete repository file tree with each file path and full contents.\n"
      }
    }
  ],
  "lastCommittedPaths": [],
  "autoRepairAttempts": [
    {
      "id": "repair_baa5d95e5d3b25703363",
      "at": "2026-05-24T08:23:23.096Z",
      "kind": "github_conflict",
      "inputId": "input_46b2c94acaed71f611b2",
      "fromStatus": "GENERATING_PROMPT",
      "nextStatus": "GENERATING_PROMPT",
      "code": "GITHUB_409",
      "message": "README.md does not match e7cc025419959b0be83bee2c41db6b3e8dabcb2c"
    }
  ],
  "activeInputId": "input_46b2c94acaed71f611b2",
  "activeRunKind": "create",
  "continueContext": "{\n  \"instruction\": \"Continue this deployRocket project from the failed stage. Preserve the original intent, but generate a compact complete v1 file set so the repository can receive real files.\",\n  \"retryDirective\": \"Do not repeat the oversized previous output attempt. Produce a compact Vite React TypeScript app with package.json, index.html, src/main.tsx, src/App.tsx, src/styles.css, README.md, vite.config.ts, and tsconfig.json.\",\n  \"project\": {\n    \"name\": \"Untitled project\",\n    \"summary\": \"Waiting for input processing.\",\n    \"status\": \"FAILED\",\n    \"currentStep\": \"Failed\",\n    \"repository\": \"https://github.com/natalikrasnov/mood-mirror-closet\"\n  },\n  \"latestError\": {\n    \"message\": \"GitHub workflow permission is missing.\",\n    \"code\": \"GITHUB_WORKFLOW_SCOPE_MISSING\",\n    \"setupInstructions\": [\n      \"Disconnect GitHub from this app, then connect again.\",\n      \"Approve the workflow permission when GitHub asks.\",\n      \"Retry the project run after the new token is stored.\"\n    ],\n    \"at\": \"2026-05-24T08:22:26.090Z\"\n  },\n  \"originalInput\": \"Create a mobile-first web app that works like an interactive mirror.\\r\\n\\r\\nThe main idea:\\r\\nThe camera should feel like a real mirror on the phone screen — fullscreen, clean, and immersive.\\r\\n\\r\\nWhen the app opens:\\r\\n\\r\\n* ask the user how they feel (options + free text)\\r\\n* then ask where they are going (options + free text)\\r\\n\\r\\nAfter that, open a fullscreen front camera.\\r\\n\\r\\nThe camera must behave like a mirror:\\r\\n\\r\\n* no UI layout around it\\r\\n* no panels\\r\\n* no sections\\r\\n* the user should feel like they are looking at themselves in a mirror\\r\\n\\r\\nOn top of the mirror:\\r\\n\\r\\n* an outfit is automatically placed on the user based on mood and destination\\r\\n\\r\\nInteraction:\\r\\n\\r\\n* swiping left/right changes the full outfit on the user\\r\\n* each swipe shows a different look\\r\\n* add a small “try again” button to generate a new outfit\\r\\n\\r\\nAdd a small floating closet button:\\r\\n\\r\\n* opens a fullscreen gallery of saved looks\\r\\n* selecting a look applies it instantly\\r\\n\\r\\nKeep everything minimal and visual.\\r\\n\\r\\nThe entire experience should feel like:\\r\\na smart mirror that helps you decide what to wear today.\",\n  \"actionHistory\": [\n    {\n      \"at\": \"2026-05-24T08:22:21.610Z\",\n      \"message\": \"Received user input\",\n      \"level\": \"info\",\n      \"status\": \"IDLE\"\n    },\n    {\n      \"at\": \"2026-05-24T08:22:24.435Z\",\n      \"message\": \"Processing user input\",\n      \"level\": \"info\",\n      \"status\": \"PROCESSING_INPUT\"\n    },\n    {\n      \"at\": \"2026-05-24T08:22:26.300Z\",\n      \"message\": \"GitHub workflow permission is missing.\",\n      \"level\": \"error\",\n      \"status\": \"FAILED\"\n    }\n  ]\n}"
}
~~~

## Status

Current stage: **Submitting prompt to Codex**

Complete: **no**

| Stage | State |
| --- | --- |
| Received user prompt | done |
| Generated product requirements | done |
| Created architecture plan | done |
| Generated project code | current |
| Committed files to GitHub | pending |
| Published project | pending |

## Project

Name: MirrorLook

Summary: A mobile-first, fullscreen “smart mirror” web app that asks your mood and destination, then opens the front camera as a clean mirror view and overlays curated outfit looks you can swipe through, regenerate, and save to a minimal closet gallery.

Repository: https://github.com/natalikrasnov/mood-mirror-closet

Live site: pending GitHub Pages publish

GitHub Pages status: pending

Code branch: main

State branch: deployrocket-state

## Original Prompt

Create a mobile-first web app that works like an interactive mirror.

The main idea:
The camera should feel like a real mirror on the phone screen — fullscreen, clean, and immersive.

When the app opens:

* ask the user how they feel (options + free text)
* then ask where they are going (options + free text)

After that, open a fullscreen front camera.

The camera must behave like a mirror:

* no UI layout around it
* no panels
* no sections
* the user should feel like they are looking at themselves in a mirror

On top of the mirror:

* an outfit is automatically placed on the user based on mood and destination

Interaction:

* swiping left/right changes the full outfit on the user
* each swipe shows a different look
* add a small “try again” button to generate a new outfit

Add a small floating closet button:

* opens a fullscreen gallery of saved looks
* selecting a look applies it instantly

Keep everything minimal and visual.

The entire experience should feel like:
a smart mirror that helps you decide what to wear today.

## Architecture And Prompt

### Structured Requirements

~~~json
{
  "projectName": "MirrorLook",
  "summary": "A mobile-first, fullscreen “smart mirror” web app that asks your mood and destination, then opens the front camera as a clean mirror view and overlays curated outfit looks you can swipe through, regenerate, and save to a minimal closet gallery.",
  "intent": "Help users quickly decide what to wear by combining a mirror-like front-camera experience with lightweight, visual outfit suggestions driven by mood and destination, with swipe-based exploration and a simple saved-looks closet.",
  "targetUsers": [
    "Mobile users choosing an outfit before leaving",
    "Users who want quick, visual outfit inspiration without heavy UI",
    "Anyone who prefers swipe-based browsing and saving favorite looks"
  ],
  "coreFeatures": [
    "Onboarding prompts: mood (preset options + free text) and destination (preset options + free text)",
    "Fullscreen front-camera mirror mode using getUserMedia with environment stripped away (no panels/sections around the camera)",
    "Mirror-like behavior: front camera preview appears as a mirror (horizontally flipped) and occupies the entire viewport",
    "Outfit overlay rendered on top of the live camera feed (visual assets bundled with the app: PNG/SVG layers) selected automatically from mood + destination",
    "Swipe left/right to switch the entire outfit (one swipe = next/previous look)",
    "Small “Try again” button to generate a new outfit suggestion set (reshuffle/reselect based on mood/destination)",
    "Floating “Closet” button opening a fullscreen gallery of saved looks",
    "Save current look to closet (stored client-side via localStorage); selecting a saved look applies it instantly on the mirror",
    "Minimal UI chrome: only essential floating controls with high contrast and unobtrusive styling",
    "Graceful permission handling: camera permission prompt, retry, and fallback messaging if unavailable/denied"
  ],
  "screens": [
    "Splash/Entry: branding + primary action to begin (optional, very brief)",
    "Mood Prompt: preset chips (e.g., Confident, Cozy, Bold, Calm, Energetic) + free-text input; Next",
    "Destination Prompt: preset chips (e.g., Work, Date, Gym, Party, Errands, Chill) + free-text input; Start Mirror",
    "Mirror Screen (primary): fullscreen front camera (mirrored) with outfit overlay, swipe navigation, small Try Again button, floating Closet button, optional Save Look control",
    "Closet Gallery (fullscreen modal): grid of saved looks; tap to apply; option to delete single look; close to return to mirror",
    "Permission/Fallback State: inline/fullscreen message with actions (Allow camera, Retry, Continue without camera using placeholder background)"
  ],
  "designDirection": "Ultra-minimal, immersive mirror-first UI: camera feed is the entire screen; overlay outfits are visually clear and centered; controls are tiny floating buttons (top/bottom corners) with subtle translucency; use swipe gestures as the primary navigation; avoid panels, cards, and persistent text—only brief labels when necessary. Overall feel: a smart mirror helping you decide what to wear today.",
  "constraints": [
    "Serverless, browser-only web app runnable from static files on GitHub Pages (no backend, no external databases, no server APIs)",
    "Camera access via WebRTC getUserMedia; must handle iOS Safari/Android Chrome permission and autoplay quirks",
    "Front camera selection should request user-facing camera where supported (facingMode: 'user'); provide fallback if not available",
    "Mirror effect must be implemented by horizontally flipping the video preview layer (CSS transform) while keeping overlays aligned",
    "Outfit generation must be client-side only: use an in-repo static catalog of outfit definitions and assets; selection logic based on mood/destination text + presets",
    "Saved looks must be stored client-side only (localStorage). If thumbnails are needed, store small metadata and/or a generated dataURL preview (with size limits and graceful degradation)",
    "No reliance on paid/secret credentials or non-static platform services",
    "Must remain usable one-handed on small screens; controls reachable and not blocking the face/torso region"
  ],
  "imageContext": [],
  "repositoryNameSuggestion": "mirrorlook"
}
~~~

### Codex Prompt Plan

~~~json
{
  "title": "MirrorLook — Mobile-first Smart Mirror (Vite + React + TypeScript, static GitHub Pages)",
  "summary": "Build a production-oriented, mobile-first, fullscreen “smart mirror” web app. It asks mood + destination, then opens a fullscreen mirrored front-camera view with minimal floating controls. Outfit overlays are generated from a local static catalog based on mood/destination. Swipe left/right changes looks, “Try again” reshuffles suggestions, and a floating “Closet” opens a fullscreen saved-looks gallery stored in localStorage.",
  "architectureInstructions": [
    "Create a static, browser-only Vite React TypeScript app (no backend, no serverless functions).",
    "All data must be local: outfit catalog + overlay assets bundled in repo; persistence via localStorage only.",
    "Must work when deployed to GitHub Pages, including repo subpath deployments: configure Vite `base: './'` and use relative asset loading via imports.",
    "Implement a simple in-app state machine for screens (no router required). Screens: Entry (optional brief), Mood prompt, Destination prompt, Mirror, Closet modal, Permission/fallback states.",
    "Camera uses `navigator.mediaDevices.getUserMedia` with `facingMode: 'user'` when possible; handle errors and allow continuing without camera (placeholder background).",
    "Mirror effect: horizontally flip the video layer (CSS transform) while keeping overlay aligned (overlay should flip same way so it feels attached to the mirror).",
    "Primary interaction is swipe left/right to cycle looks; must support touch + mouse (pointer events).",
    "Keep UI minimal: fullscreen camera, only small floating buttons (Try again, Closet, Save, Back/Close). Avoid panels/sections around the camera.",
    "Accessibility: clear focus states, labeled buttons, readable contrast, reduced-motion support, ARIA for modal, and non-blocking text overlays.",
    "No TODOs/placeholders; provide complete, buildable files. Include README with run/build/deploy notes for GitHub Pages."
  ],
  "frontendInstructions": [
    "Use React + TypeScript functional components with hooks.",
    "Implement `useCamera` hook that starts/stops stream, selects front camera when available, exposes status (idle/loading/ready/denied/error) and error messages.",
    "Implement `useSwipe` (or similar) using pointer/touch events to detect horizontal swipe with threshold; support keyboard alternatives (left/right arrows) for accessibility.",
    "Create an outfit system: `Outfit` objects with id, name, tags (moods, destinations, vibe keywords), and layered overlay assets (SVG/PNG). Render overlays as positioned, responsive layers centered over the user (e.g., torso region).",
    "Outfit selection logic: based on chosen mood/destination (preset + free text), compute matches via tag scoring (simple keyword match) and pick a small set (e.g., 7) of suggestions; “Try again” reshuffles/regenerates a new set from same query.",
    "Mirror screen layout: `<video>` full-viewport with `object-fit: cover`, `playsInline`, `muted`, `autoPlay` (start playback after stream set). Apply `transform: scaleX(-1)` for mirroring.",
    "Overlay: absolute positioned container on top of video; ensure it scales with viewport; add slight shadow/outline for visibility.",
    "Closet: floating button opens fullscreen modal gallery. Gallery shows saved looks in a grid (render mini overlay previews using same outfit renderer at smaller size). Tap applies instantly and closes modal.",
    "Save current look: store in localStorage as an array of `{ outfitId, createdAt }`; include dedupe or allow multiples; provide delete single look in closet.",
    "Permission/fallback UI: if denied/unavailable, show minimal fullscreen message with actions: Retry camera, Continue without camera. Continue uses a subtle animated/gradient background instead of video.",
    "Polish: safe-area insets for iOS, prevent body scroll in mirror mode, handle orientation changes, respect `prefers-reduced-motion` (reduce transitions)."
  ],
  "backendInstructions": [
    "None. Do not add any backend, server APIs, database, auth, or secret handling. All behavior must be client-only using localStorage, in-memory state, and bundled static assets."
  ],
  "modificationInstructions": [
    "Return a COMPLETE REPLACEMENT FILE SET for a new repository (create mode). Include all necessary config and source files.",
    "Use Vite + React + TypeScript templates as baseline, but fully implement all features described.",
    "Avoid heavy dependencies; prefer small custom hooks/utilities. Only add dependencies if truly necessary.",
    "Ensure `npm install`, `npm run build`, and `npm run preview` work without additional steps."
  ],
  "acceptanceCriteria": [
    "App builds with `npm run build` into static assets and runs with `npm run preview`.",
    "Deployed under a subpath (GitHub Pages) works correctly (Vite base configured; assets load).",
    "On first use, user is prompted for Mood (preset + free text) and Destination (preset + free text) before mirror starts.",
    "Mirror screen is truly fullscreen and immersive: no surrounding layout; camera fills viewport; UI is limited to small floating controls.",
    "Front camera requested (`facingMode: 'user'`); video is mirrored (horizontal flip).",
    "Outfit overlay appears automatically based on mood/destination; user can swipe left/right to change looks.",
    "“Try again” generates a fresh set of suggestions from the same mood/destination inputs.",
    "User can save a look; Closet modal shows saved looks from localStorage; selecting applies instantly; deleting works.",
    "Graceful handling when camera is denied/unavailable with retry + continue-without-camera mode.",
    "Mobile-first usability: one-handed controls, safe-area padding, no accidental scroll; accessible buttons/labels and modal semantics."
  ],
  "codexPrompt": "You are Codex. Generate a complete replacement file set for a NEW repo implementing the app described below.\n\nProject: MirrorLook (Vite + React + TypeScript)\nDeployment: Static, serverless, browser-only. Must work on GitHub Pages including repository subpath deployments.\nIMPORTANT CONSTRAINTS:\n- Do NOT add backend code, server routes, serverless functions, databases, private APIs, or secrets.\n- All “backend-like” behavior must be localStorage / in-memory state / bundled static sample data.\n- No TODOs or placeholders; everything must be implemented and runnable.\n\nCore UX:\n1) On open, ask: “How do you feel?”\n   - Provide preset option chips + a free-text input.\n   - Presets example: Confident, Cozy, Bold, Calm, Energetic.\n   - Next button.\n2) Then ask: “Where are you going?”\n   - Provide preset chips + free-text input.\n   - Presets example: Work, Date, Gym, Party, Errands, Chill.\n   - Start Mirror button.\n3) After prompts, open fullscreen FRONT camera.\n   - The camera must feel like a real mirror: fullscreen, clean, immersive.\n   - No panels/sections around it.\n   - Mirror effect: horizontally flip the video.\n4) On top of the mirror:\n   - Render a full outfit overlay automatically chosen based on mood + destination.\n   - Overlay assets must be bundled with app (SVG/PNG). Keep it visually clear and centered.\n5) Interaction:\n   - Swipe left/right changes the full outfit (next/previous look).\n   - Add a small “Try again” button to regenerate a new set of outfit suggestions for the same mood/destination.\n6) Closet:\n   - Small floating “Closet” button.\n   - Opens fullscreen gallery modal of saved looks (from localStorage).\n   - Selecting a saved look applies it instantly in the mirror.\n   - Provide delete for individual saved looks.\n   - Provide a small floating “Save” control on mirror screen.\n7) Permissions:\n   - Handle camera permission prompt and errors.\n   - Provide Retry.\n   - Allow “Continue without camera” mode using a tasteful placeholder background.\n\nDesign direction:\n- Ultra-minimal, visual, mirror-first UI.\n- Camera feed fills entire viewport.\n- Controls are tiny floating buttons (top/bottom corners), subtle translucent backgrounds, high contrast.\n- Avoid persistent text; only minimal labels.\n- One-handed on small screens; do not block face/torso center.\n- Respect safe-area insets on iOS.\n\nTechnical requirements:\n- Vite config must support GitHub Pages subpath deployment: set `base: './'`.\n- Use React + TypeScript.\n- Implement custom hooks:\n  - `useCamera()` to manage getUserMedia lifecycle and status.\n  - `useSwipe()` using pointer/touch events to detect horizontal swipes (with threshold).\n- Outfit system:\n  - Create a static outfit catalog in `src/data/outfits.ts`.\n  - Each outfit: `id`, `name`, `tags` (moods/destinations/keywords), and layered assets (imported SVG/PNG) such as top/bottom/shoes/accessory.\n  - Provide ~12–20 outfits for variety using simple SVG assets you create in-repo (no external downloads).\n  - Selection algorithm: score outfits by matching mood/destination (both preset and free text tokens), pick a suggestion set (e.g., 7) and allow reshuffle.\n- Closet:\n  - Store array of saved outfit IDs + timestamps in localStorage.\n  - Closet grid renders miniature previews by reusing the same OutfitOverlay renderer in a scaled container (avoid storing big images/dataURLs).\n- Accessibility:\n  - Buttons have aria-labels.\n  - Closet is a proper modal dialog (aria-modal, focus trap or at least initial focus + ESC to close).\n  - Keyboard support: left/right arrows to change looks; Enter/Space activate focused controls.\n  - Visible focus styles.\n  - `prefers-reduced-motion` reduces transitions.\n\nImplementation details:\n- Mirror screen layout:\n  - Use a full-viewport container.\n  - `<video>` absolute, inset 0, `width/height: 100%`, `object-fit: cover`, `transform: scaleX(-1)`.\n  - Overlay container absolute inset 0, pointer-events none; inside, position outfit layers around center (torso region). Apply same mirror transform as video so it feels aligned.\n- Controls:\n  - Floating buttons with pointer-events auto.\n  - Suggested positions:\n    - Top-left: Back (to prompts) or reset.\n    - Top-right: Closet.\n    - Bottom-right: Save.\n    - Bottom-left or bottom-center: Try again.\n- Prevent page scrolling while in mirror mode.\n\nFiles to include (minimum):\n- package.json (vite/react/ts)\n- vite.config.ts (base './')\n- tsconfig.json, tsconfig.node.json\n- index.html\n- src/main.tsx\n- src/App.tsx\n- src/styles.css (global, includes safe-area handling)\n- src/hooks/useCamera.ts\n- src/hooks/useSwipe.ts\n- src/data/outfits.ts\n- src/components/OnboardingMood.tsx\n- src/components/OnboardingDestination.tsx\n- src/components/MirrorScreen.tsx\n- src/components/OutfitOverlay.tsx\n- src/components/ClosetModal.tsx\n- src/utils/storage.ts\n- src/utils/outfitSelection.ts\n- src/assets/outfits/*.svg (create multiple simple SVGs for layers)\n- README.md with run/build/deploy instructions for GitHub Pages.\n\nEnsure:\n- No external asset URLs.\n- No reliance on non-static services.\n- Works on mobile Safari/Chrome best-effort (playsInline; start camera on user gesture).\n\nOutput format:\n- Return the complete repository file tree with each file path and full contents.\n"
}
~~~

## Action History

- 2026-05-24T08:22:21.610Z - Received user input (info)
- 2026-05-24T08:22:24.435Z - Processing user input (info)
- 2026-05-24T08:22:26.300Z - GitHub workflow permission is missing. (error)
- 2026-05-24T08:22:58.397Z - Continuing failed run with previous dossier, prompt, architecture, and error context (warning)
- 2026-05-24T08:23:15.775Z - Generated structured product requirements (success)
- 2026-05-24T08:23:18.140Z - Creating architecture and implementation prompt (info)
- 2026-05-24T08:23:23.304Z - Auto-fix agent is retrying after a GitHub write conflict (warning) - Attempt 1 of 3.
Original error: README.md does not match e7cc025419959b0be83bee2c41db6b3e8dabcb2c
Code: GITHUB_409
- 2026-05-24T08:24:06.162Z - Generated structured Codex prompt (success)
- 2026-05-24T08:24:08.725Z - Generated structured Codex prompt (success)
- 2026-05-24T08:24:10.999Z - Sent prompt to Codex (info)

## Latest Error

None.
