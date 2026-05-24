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
  "updatedAt": "2026-05-24T08:24:14.018Z",
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
        "title": "MirrorLook — Mobile-first Smart Mirror (Vite + React + TS, static GitHub Pages)",
        "summary": "Build a mobile-first, fullscreen “interactive mirror” web app. Onboarding asks mood + destination (chips + free text). Then opens a fullscreen front-camera mirror view (horizontally flipped) with minimal floating controls. Outfit overlays (bundled SVG/PNG assets) are automatically suggested based on mood/destination. Users swipe left/right to change full looks, tap “Try again” to reshuffle suggestions, and save looks to a Closet (fullscreen gallery) stored in localStorage. Must work as a static, serverless GitHub Pages app (including subpath deployments).",
        "architectureInstructions": [
          "Create a complete Vite React TypeScript project (buildable) with a polished mobile-first UI and no TODO placeholders.",
          "Browser-only, serverless: no backend, no external APIs, no serverless functions, no databases. Use in-memory state + localStorage only.",
          "Support GitHub Pages + repository subpath deployments: configure Vite `base: './'` and use relative asset paths so the build works under any subdirectory.",
          "Implement a small state machine for screens: Entry (optional) → Mood → Destination → Mirror → Closet modal. Include a permission/fallback overlay when camera is denied/unavailable.",
          "Use a local outfit catalog (TypeScript data) and bundled overlay assets (SVG recommended) that can render as layered, semi-transparent clothing shapes aligned to the mirrored video.",
          "Ensure accessibility: semantic buttons, labels for inputs, focus management for modal, keyboard support for swipe navigation (arrow keys), and reduced-motion considerations."
        ],
        "frontendInstructions": [
          "UI must feel like a real mirror: the camera feed is fullscreen with no surrounding layout. Overlay outfits on top of the video with absolute positioning and pointer-events managed so swipes work.",
          "Onboarding: Mood screen and Destination screen each have preset option chips + a free text input. Allow selecting a chip, typing custom text, or both (combine for matching). Provide clear Next/Start actions.",
          "Mirror screen: fullscreen mirrored front-camera video (CSS transform scaleX(-1)) with overlays that remain visually aligned. Keep controls minimal: small floating buttons for Try Again, Closet, and Save Look.",
          "Swipe interaction: horizontal swipe left/right changes the outfit (next/previous). Implement with Pointer Events (touch-friendly), with threshold and velocity guard. Also support arrow keys for desktop testing.",
          "Try Again: reshuffle/reselect a suggestion set based on mood/destination without changing user inputs.",
          "Closet: floating button opens a fullscreen modal gallery (grid). Saved looks show a minimal thumbnail preview (can be a small inline SVG preview using the same overlay asset) + name + timestamp. Tap to apply instantly. Include delete per item and a close button. Store in localStorage.",
          "Graceful permission handling: camera starts only after user gesture (Start Mirror). If permission denied/unavailable, show a full-viewport fallback background (e.g., subtle gradient) and still allow outfit browsing and closet features.",
          "Styling: ultra-minimal, immersive; use safe-area insets, high-contrast small translucent buttons, avoid panels/cards. Keep text minimal and avoid persistent headers."
        ],
        "backendInstructions": [
          "No backend. Implement outfit selection logic fully client-side using a static catalog and simple matching/scoring based on mood/destination keywords (chips + free text).",
          "Persist: mood, destination, and saved looks in localStorage (with versioned schema and safe parsing).",
          "If generating thumbnails: do NOT store camera imagery. Only store outfit metadata and a lightweight preview representation (e.g., outfitId + colors + SVG name)."
        ],
        "modificationInstructions": [
          "Create mode: return a complete replacement file set for a new repo. Include all required files (package.json, vite config, tsconfig, index.html, src files, styles, and assets).",
          "Avoid external image/CDN dependencies. All overlay assets must live in the repo (SVG files in `src/assets/` or inline SVG React components).",
          "Do not include secrets or instructions requiring secrets.",
          "No placeholder TODOs—ship a working, buildable app with reasonable sample outfit assets and matching logic."
        ],
        "acceptanceCriteria": [
          "Runs with `npm install` + `npm run dev`; builds with `npm run build` into static assets that work on GitHub Pages under a subpath.",
          "On first use, user can complete mood + destination prompts (chips + free text) and then enter a fullscreen mirror view.",
          "Mirror view uses front camera when available and is horizontally flipped like a mirror; if unavailable/denied, a fallback view appears but app remains usable.",
          "Outfit overlay appears on top of the mirror and changes via swipe left/right (and arrow keys).",
          "Try Again reshuffles/reselects outfits based on the same inputs.",
          "User can save current look; Closet gallery opens fullscreen, lists saved looks from localStorage, allows applying a saved look instantly, and supports deleting items.",
          "UI is minimal, mobile-first, polished, and accessible (buttons labeled, modal focus trap, keyboard navigation)."
        ],
        "codexPrompt": "You are Codex. Generate a complete replacement file set for a NEW repository implementing the described app.\n\nProject: MirrorLook\nTech constraints:\n- Static Vite + React + TypeScript (no backend, no serverless functions, no databases).\n- Must build to static assets that work on GitHub Pages, including repository subpath deployments.\n- Do not use secrets or private APIs.\n- Camera access must be via `navigator.mediaDevices.getUserMedia` and must be initiated only after a user gesture.\n- Use only local assets (SVG/PNG in repo). No CDN images.\n\nApp concept:\nA mobile-first web app that feels like a smart interactive mirror. The camera view should feel like a real mirror: fullscreen, immersive, no surrounding layout, no panels/sections. Minimal floating controls only.\n\nFlow / screens:\n1) (Optional) Entry/Splash: very brief branding and a Begin button.\n2) Mood prompt screen:\n   - Preset chips: Confident, Cozy, Bold, Calm, Energetic.\n   - Free text input for custom mood.\n   - Next button.\n3) Destination prompt screen:\n   - Preset chips: Work, Date, Gym, Party, Errands, Chill.\n   - Free text input.\n   - Start Mirror button.\n4) Mirror screen (primary):\n   - Fullscreen front camera preview.\n   - Mirror behavior: horizontally flip the VIDEO preview via CSS (scaleX(-1)).\n   - Outfit overlay rendered above the video, centered to torso region; overlay must remain aligned with mirrored view.\n   - Interaction:\n     - Swipe left/right changes the full outfit (one swipe = next/previous look).\n     - Provide keyboard alternative: left/right arrow keys.\n   - Controls (minimal, floating, translucent):\n     - “Try again” button: reshuffle/reselect suggested looks based on mood+destination.\n     - “Closet” floating button: opens fullscreen gallery of saved looks.\n     - “Save look” control: saves current look to localStorage.\n5) Closet gallery (fullscreen modal):\n   - Grid of saved looks (most recent first).\n   - Each item shows a small preview (do NOT use camera imagery), outfit name, and timestamp.\n   - Tap applies the look instantly and closes the closet.\n   - Option to delete a saved look.\n   - Close button; trap focus while open; ESC closes.\n6) Permission/Fallback:\n   - If camera permission denied/unavailable: show a full-viewport fallback background (gradient/noise) but still render overlays and allow swiping/try again/closet.\n   - Provide Retry button and clear messaging.\n\nOutfit system (client-side only):\n- Create a static outfit catalog in TypeScript with ~12–18 outfits.\n- Each outfit includes:\n  - id, displayName\n  - tags: moods[], destinations[]\n  - overlay asset definition: one or more layered SVG shapes (e.g., top, bottom, jacket, accessory) with configurable colors/opacity.\n- Implement outfit selection logic:\n  - Inputs: selected mood chip (optional), mood free text, destination chip (optional), destination free text.\n  - Compute a score per outfit by matching tags and keywords found in free text (simple contains/regex).\n  - Choose a “deck” of e.g. 8 outfits: highest scoring plus some randomness.\n  - Maintain current index; swiping changes index.\n  - “Try again” regenerates the deck (different random seed) while keeping inputs.\n\nUI/UX requirements:\n- Mirror screen must be truly fullscreen and immersive: no headers/sidebars/sections; just video and overlay.\n- Controls must be small, reachable one-handed, and not block face/torso (place them in corners).\n- Use safe-area insets for iOS.\n- Keep text minimal; show tiny labels only when necessary.\n- Respect reduced motion: if prefers-reduced-motion, reduce transitions.\n\nImplementation details:\n- Use React functional components + hooks.\n- Implement swipe via Pointer Events on an overlay container; ignore vertical scroll; set `touch-action: pan-y` or similar so vertical gestures still scroll only where appropriate (but Mirror view should not scroll).\n- Camera component:\n  - Request `facingMode: 'user'`.\n  - Use `<video playsInline muted autoPlay>`.\n  - Handle stream lifecycle and cleanup on unmount.\n  - If getUserMedia fails, set fallback state.\n- localStorage:\n  - Store mood/destination inputs.\n  - Store saved looks as array: { id, outfitId, savedAt, moodSummary, destinationSummary }.\n  - Implement safe parse with schema version.\n\nFiles to include (minimum):\n- package.json with scripts dev/build/preview and dependencies.\n- vite.config.ts with `base: './'`.\n- tsconfig.json, tsconfig.node.json, vite-env.d.ts.\n- index.html.\n- src/main.tsx, src/App.tsx.\n- src/styles.css (global) + component-level styles as needed.\n- src/lib/outfits.ts (catalog + scoring + deck generation).\n- src/lib/storage.ts (localStorage helpers).\n- src/components for: Onboarding screens, MirrorView, CameraView, OutfitOverlay, FloatingButton, ClosetModal.\n- src/assets: include at least a few SVG assets OR implement overlays as React inline SVG components; ensure build works without external assets.\n- README.md with setup and GitHub Pages deployment note (using base './').\n\nQuality bar:\n- Must run and build without errors.\n- No TODO placeholders.\n- Keep code clean, typed, and reasonably modular.\n- Provide polished styling: dark translucent buttons, subtle haptics-like feedback via CSS active states, and minimal animations.\n\nOutput format:\n- Return the full file tree with file contents. Each file should be clearly separated and named so it can be recreated exactly.\n"
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
  "title": "MirrorLook — Mobile-first Smart Mirror (Vite + React + TS, static GitHub Pages)",
  "summary": "Build a mobile-first, fullscreen “interactive mirror” web app. Onboarding asks mood + destination (chips + free text). Then opens a fullscreen front-camera mirror view (horizontally flipped) with minimal floating controls. Outfit overlays (bundled SVG/PNG assets) are automatically suggested based on mood/destination. Users swipe left/right to change full looks, tap “Try again” to reshuffle suggestions, and save looks to a Closet (fullscreen gallery) stored in localStorage. Must work as a static, serverless GitHub Pages app (including subpath deployments).",
  "architectureInstructions": [
    "Create a complete Vite React TypeScript project (buildable) with a polished mobile-first UI and no TODO placeholders.",
    "Browser-only, serverless: no backend, no external APIs, no serverless functions, no databases. Use in-memory state + localStorage only.",
    "Support GitHub Pages + repository subpath deployments: configure Vite `base: './'` and use relative asset paths so the build works under any subdirectory.",
    "Implement a small state machine for screens: Entry (optional) → Mood → Destination → Mirror → Closet modal. Include a permission/fallback overlay when camera is denied/unavailable.",
    "Use a local outfit catalog (TypeScript data) and bundled overlay assets (SVG recommended) that can render as layered, semi-transparent clothing shapes aligned to the mirrored video.",
    "Ensure accessibility: semantic buttons, labels for inputs, focus management for modal, keyboard support for swipe navigation (arrow keys), and reduced-motion considerations."
  ],
  "frontendInstructions": [
    "UI must feel like a real mirror: the camera feed is fullscreen with no surrounding layout. Overlay outfits on top of the video with absolute positioning and pointer-events managed so swipes work.",
    "Onboarding: Mood screen and Destination screen each have preset option chips + a free text input. Allow selecting a chip, typing custom text, or both (combine for matching). Provide clear Next/Start actions.",
    "Mirror screen: fullscreen mirrored front-camera video (CSS transform scaleX(-1)) with overlays that remain visually aligned. Keep controls minimal: small floating buttons for Try Again, Closet, and Save Look.",
    "Swipe interaction: horizontal swipe left/right changes the outfit (next/previous). Implement with Pointer Events (touch-friendly), with threshold and velocity guard. Also support arrow keys for desktop testing.",
    "Try Again: reshuffle/reselect a suggestion set based on mood/destination without changing user inputs.",
    "Closet: floating button opens a fullscreen modal gallery (grid). Saved looks show a minimal thumbnail preview (can be a small inline SVG preview using the same overlay asset) + name + timestamp. Tap to apply instantly. Include delete per item and a close button. Store in localStorage.",
    "Graceful permission handling: camera starts only after user gesture (Start Mirror). If permission denied/unavailable, show a full-viewport fallback background (e.g., subtle gradient) and still allow outfit browsing and closet features.",
    "Styling: ultra-minimal, immersive; use safe-area insets, high-contrast small translucent buttons, avoid panels/cards. Keep text minimal and avoid persistent headers."
  ],
  "backendInstructions": [
    "No backend. Implement outfit selection logic fully client-side using a static catalog and simple matching/scoring based on mood/destination keywords (chips + free text).",
    "Persist: mood, destination, and saved looks in localStorage (with versioned schema and safe parsing).",
    "If generating thumbnails: do NOT store camera imagery. Only store outfit metadata and a lightweight preview representation (e.g., outfitId + colors + SVG name)."
  ],
  "modificationInstructions": [
    "Create mode: return a complete replacement file set for a new repo. Include all required files (package.json, vite config, tsconfig, index.html, src files, styles, and assets).",
    "Avoid external image/CDN dependencies. All overlay assets must live in the repo (SVG files in `src/assets/` or inline SVG React components).",
    "Do not include secrets or instructions requiring secrets.",
    "No placeholder TODOs—ship a working, buildable app with reasonable sample outfit assets and matching logic."
  ],
  "acceptanceCriteria": [
    "Runs with `npm install` + `npm run dev`; builds with `npm run build` into static assets that work on GitHub Pages under a subpath.",
    "On first use, user can complete mood + destination prompts (chips + free text) and then enter a fullscreen mirror view.",
    "Mirror view uses front camera when available and is horizontally flipped like a mirror; if unavailable/denied, a fallback view appears but app remains usable.",
    "Outfit overlay appears on top of the mirror and changes via swipe left/right (and arrow keys).",
    "Try Again reshuffles/reselects outfits based on the same inputs.",
    "User can save current look; Closet gallery opens fullscreen, lists saved looks from localStorage, allows applying a saved look instantly, and supports deleting items.",
    "UI is minimal, mobile-first, polished, and accessible (buttons labeled, modal focus trap, keyboard navigation)."
  ],
  "codexPrompt": "You are Codex. Generate a complete replacement file set for a NEW repository implementing the described app.\n\nProject: MirrorLook\nTech constraints:\n- Static Vite + React + TypeScript (no backend, no serverless functions, no databases).\n- Must build to static assets that work on GitHub Pages, including repository subpath deployments.\n- Do not use secrets or private APIs.\n- Camera access must be via `navigator.mediaDevices.getUserMedia` and must be initiated only after a user gesture.\n- Use only local assets (SVG/PNG in repo). No CDN images.\n\nApp concept:\nA mobile-first web app that feels like a smart interactive mirror. The camera view should feel like a real mirror: fullscreen, immersive, no surrounding layout, no panels/sections. Minimal floating controls only.\n\nFlow / screens:\n1) (Optional) Entry/Splash: very brief branding and a Begin button.\n2) Mood prompt screen:\n   - Preset chips: Confident, Cozy, Bold, Calm, Energetic.\n   - Free text input for custom mood.\n   - Next button.\n3) Destination prompt screen:\n   - Preset chips: Work, Date, Gym, Party, Errands, Chill.\n   - Free text input.\n   - Start Mirror button.\n4) Mirror screen (primary):\n   - Fullscreen front camera preview.\n   - Mirror behavior: horizontally flip the VIDEO preview via CSS (scaleX(-1)).\n   - Outfit overlay rendered above the video, centered to torso region; overlay must remain aligned with mirrored view.\n   - Interaction:\n     - Swipe left/right changes the full outfit (one swipe = next/previous look).\n     - Provide keyboard alternative: left/right arrow keys.\n   - Controls (minimal, floating, translucent):\n     - “Try again” button: reshuffle/reselect suggested looks based on mood+destination.\n     - “Closet” floating button: opens fullscreen gallery of saved looks.\n     - “Save look” control: saves current look to localStorage.\n5) Closet gallery (fullscreen modal):\n   - Grid of saved looks (most recent first).\n   - Each item shows a small preview (do NOT use camera imagery), outfit name, and timestamp.\n   - Tap applies the look instantly and closes the closet.\n   - Option to delete a saved look.\n   - Close button; trap focus while open; ESC closes.\n6) Permission/Fallback:\n   - If camera permission denied/unavailable: show a full-viewport fallback background (gradient/noise) but still render overlays and allow swiping/try again/closet.\n   - Provide Retry button and clear messaging.\n\nOutfit system (client-side only):\n- Create a static outfit catalog in TypeScript with ~12–18 outfits.\n- Each outfit includes:\n  - id, displayName\n  - tags: moods[], destinations[]\n  - overlay asset definition: one or more layered SVG shapes (e.g., top, bottom, jacket, accessory) with configurable colors/opacity.\n- Implement outfit selection logic:\n  - Inputs: selected mood chip (optional), mood free text, destination chip (optional), destination free text.\n  - Compute a score per outfit by matching tags and keywords found in free text (simple contains/regex).\n  - Choose a “deck” of e.g. 8 outfits: highest scoring plus some randomness.\n  - Maintain current index; swiping changes index.\n  - “Try again” regenerates the deck (different random seed) while keeping inputs.\n\nUI/UX requirements:\n- Mirror screen must be truly fullscreen and immersive: no headers/sidebars/sections; just video and overlay.\n- Controls must be small, reachable one-handed, and not block face/torso (place them in corners).\n- Use safe-area insets for iOS.\n- Keep text minimal; show tiny labels only when necessary.\n- Respect reduced motion: if prefers-reduced-motion, reduce transitions.\n\nImplementation details:\n- Use React functional components + hooks.\n- Implement swipe via Pointer Events on an overlay container; ignore vertical scroll; set `touch-action: pan-y` or similar so vertical gestures still scroll only where appropriate (but Mirror view should not scroll).\n- Camera component:\n  - Request `facingMode: 'user'`.\n  - Use `<video playsInline muted autoPlay>`.\n  - Handle stream lifecycle and cleanup on unmount.\n  - If getUserMedia fails, set fallback state.\n- localStorage:\n  - Store mood/destination inputs.\n  - Store saved looks as array: { id, outfitId, savedAt, moodSummary, destinationSummary }.\n  - Implement safe parse with schema version.\n\nFiles to include (minimum):\n- package.json with scripts dev/build/preview and dependencies.\n- vite.config.ts with `base: './'`.\n- tsconfig.json, tsconfig.node.json, vite-env.d.ts.\n- index.html.\n- src/main.tsx, src/App.tsx.\n- src/styles.css (global) + component-level styles as needed.\n- src/lib/outfits.ts (catalog + scoring + deck generation).\n- src/lib/storage.ts (localStorage helpers).\n- src/components for: Onboarding screens, MirrorView, CameraView, OutfitOverlay, FloatingButton, ClosetModal.\n- src/assets: include at least a few SVG assets OR implement overlays as React inline SVG components; ensure build works without external assets.\n- README.md with setup and GitHub Pages deployment note (using base './').\n\nQuality bar:\n- Must run and build without errors.\n- No TODO placeholders.\n- Keep code clean, typed, and reasonably modular.\n- Provide polished styling: dark translucent buttons, subtle haptics-like feedback via CSS active states, and minimal animations.\n\nOutput format:\n- Return the full file tree with file contents. Each file should be clearly separated and named so it can be recreated exactly.\n"
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
