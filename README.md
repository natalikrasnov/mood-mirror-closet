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
  "updatedAt": "2026-05-24T08:24:18.239Z",
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
    },
    {
      "id": "action_e72acb4a3e85bd47b62d",
      "at": "2026-05-24T08:24:16.468Z",
      "message": "Auto-fix agent is retrying after a GitHub write conflict",
      "level": "warning",
      "status": "SENDING_TO_CODEX",
      "details": "Attempt 2 of 3.\nOriginal error: README.md does not match e9f875bc3397de4d50d5cedba9079eb89981936b\nCode: GITHUB_409"
    },
    {
      "id": "action_2c2f62c1114fff528991",
      "at": "2026-05-24T08:24:18.239Z",
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
        "title": "MirrorFit — Mobile-first smart mirror (Vite + React + TypeScript, static GitHub Pages app)",
        "summary": "Build a production-ready, serverless, browser-only mobile web app that feels like an immersive mirror: two quick onboarding prompts (mood + destination), then a fullscreen mirrored front-camera view with a minimal outfit overlay. Users swipe left/right to cycle looks, tap “Try again” to generate a fresh suggestion set, and can save/apply looks from a fullscreen Closet gallery persisted in localStorage.",
        "architectureInstructions": [
          "Use Vite + React + TypeScript (no backend). App must build to static assets that work on GitHub Pages, including subpath deployments.",
          "Use local state + localStorage only. No external APIs, no secrets, no serverless functions, no databases.",
          "Keep UI minimal and camera-first: once in mirror mode, there must be no page layout around the camera (no headers/sidebars/panels). Only small floating controls over the video.",
          "Implement a simple deterministic outfit recommendation system using static look definitions + tags (mood/destination). Use seeded shuffle based on mood/destination and a “try again” counter.",
          "Persist onboarding answers (mood/destination + free text) and saved looks to localStorage. Ensure schema versioning or safe parsing.",
          "Handle camera permissions gracefully: primer screen, error state for denial, and a retry flow.",
          "Support swipe gestures on mobile via Pointer Events and keyboard arrows on desktop.",
          "Offline-capable by design: all looks/overlays are local static assets; no network fetches required after initial load."
        ],
        "frontendInstructions": [
          "Screens/flow (single-page app with internal view state is fine): (1) Permission Primer → (2) Mood Prompt (chips + optional free text) → (3) Destination Prompt (chips + optional free text) → (4) Mirror View (main) → (5) Closet Gallery (fullscreen modal/screen).",
          "Mood prompt: chips like Confident, Cozy, Energetic, Calm, Bold + a free-text field (optional). Destination prompt: Work, Date, Gym, Party, Errands, Travel + free-text (optional). Provide clear CTA to continue.",
          "Mirror view: request front camera (facingMode: 'user') using getUserMedia; show mirrored video (horizontal flip) filling entire screen (object-fit: cover). Prevent page scrolling; use safe-area insets.",
          "Overlay: render a transparent SVG/PNG outfit image centered over the video. It should feel like clothing drawn on top of the person. Keep it subtle and stylish (semi-transparent, soft strokes).",
          "Interaction: swipe left/right anywhere on mirror to change outfit (previous/next). Also support ArrowLeft/ArrowRight.",
          "Controls (floating, minimal): Try again button (regenerates the suggestion set), Closet button (opens fullscreen saved looks), Save button (saves current look). Buttons must be small, circular/rounded, high-contrast, with accessible labels (aria-label) and visible focus states.",
          "Closet gallery: fullscreen overlay with a close button; show a grid of saved looks with thumbnail preview and small metadata (name/time). Tap a saved look to apply instantly and close closet (or keep open but apply immediately).",
          "Visual design: dark/neutral minimal chrome; use subtle blur/transparent backgrounds for buttons; no heavy cards or visible layout in mirror mode. Maintain 60fps feel; keep overlays lightweight.",
          "Accessibility: proper button semantics, focus rings, readable text, touch targets >= 44px, reduced motion respect (prefers-reduced-motion)."
        ],
        "backendInstructions": [
          "None. Do not create any backend. Simulate all behavior locally with static data + localStorage only."
        ],
        "modificationInstructions": [
          "Create the complete initial file set for a new repo. Codex must output a full replacement set of files (package.json, vite config, src, public, assets, etc.). No TODOs or placeholders.",
          "Do not add any server code. Do not depend on private/external APIs. Do not require keys.",
          "Use only client-side generation/selection of outfits from bundled static assets (SVG preferred). Include enough outfit assets to make swiping meaningful (at least 12 distinct looks).",
          "Ensure the app works when deployed under a GitHub Pages subpath. Configure Vite base properly and avoid absolute asset paths that break under subpaths."
        ],
        "acceptanceCriteria": [
          "`npm install`, `npm run build`, and `npm run preview` succeed.",
          "App is mobile-first and feels like a fullscreen mirror: in mirror mode the camera fills the screen with no surrounding layout; only floating controls appear.",
          "On first load, user is prompted for mood then destination (chips + optional free text) before camera starts.",
          "Camera uses front-facing preference and is mirrored horizontally. If permission denied/unavailable, a clear fallback UI appears with retry instructions.",
          "An outfit overlay is automatically chosen based on mood + destination; swiping left/right changes the full outfit; Try again regenerates the set.",
          "User can save the current look; saved looks persist in localStorage and appear in a fullscreen Closet gallery; selecting applies instantly.",
          "Swipe works on touch devices; arrow keys work on desktop; UI remains minimal and polished; accessible labels and focus states are present.",
          "No backend, no network calls for outfit generation; everything is static/local."
        ],
        "codexPrompt": "You are implementing a complete new project from scratch.\n\nReturn a COMPLETE REPLACEMENT FILE SET for a static, serverless, browser-only app that can deploy to GitHub Pages.\n\nProject: MirrorFit\nTech: Vite + React + TypeScript\n\nHard constraints:\n- No backend code, no server, no serverless functions, no DB, no auth, no private APIs, no secrets.\n- All “backend-like” behavior must be done with local state, localStorage, and bundled static sample data/assets.\n- Must work on GitHub Pages including repository subpath deployments.\n\nCore UX:\n1) On open, show a short permission primer screen explaining that the camera is used like a mirror, with a single “Start” button.\n2) Ask “How do you feel?” with selectable chips (Confident, Cozy, Energetic, Calm, Bold) and an optional free-text input.\n3) Ask “Where are you going?” with selectable chips (Work, Date, Gym, Party, Errands, Travel) and an optional free-text input.\n4) Then open the FRONT camera in a fullscreen mirror mode:\n   - The video must fill the entire viewport (object-fit cover), mirrored horizontally (scaleX(-1)).\n   - No surrounding layout, no panels, no sections. Only small floating controls.\n   - Overlay a full outfit image (transparent SVG/PNG) on top of the video.\n5) Interactions in mirror mode:\n   - Swipe left/right anywhere to change the outfit to previous/next.\n   - Provide a small floating “Try again” button to regenerate a new suggestion set of outfits based on mood/destination.\n   - Provide a small floating “Save” button to save the current look to a Closet.\n   - Provide a small floating “Closet” button to open a fullscreen gallery of saved looks.\n6) Closet:\n   - Fullscreen overlay/screen with close button.\n   - Grid of saved looks showing thumbnails (use the same outfit SVG as a thumbnail) and minimal metadata.\n   - Tapping a saved look applies it instantly to the mirror overlay (and closes the closet).\n\nOutfit system (no ML, no APIs):\n- Bundle at least 12 distinct outfit overlay assets in `src/assets/outfits/` as SVG files with transparent background.\n- Create a `looks` data file defining each look: id, name, asset path, tags for moods and destinations (e.g., moods: ['cozy'], destinations: ['work']).\n- Implement selection:\n  - Parse mood chip + mood free text and destination chip + destination free text.\n  - Map free-text keywords to tags (simple dictionary).\n  - Filter looks by matching tags; if none match, fall back to all.\n  - Generate an ordered “suggestion set” via a seeded shuffle using (moodTag + destinationTag + tryAgainCount) so it feels fresh but stable.\n  - Swiping cycles within this suggestion list.\n\nCamera handling:\n- Use `navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false })` with reasonable fallbacks if facingMode not supported.\n- Handle permission denied/unavailable states with a clear fullscreen error UI and a retry button.\n- Stop tracks on unmount.\n\nGestures/keyboard:\n- Implement swipe using Pointer Events on the fullscreen mirror container (track startX, deltaX, threshold).\n- Support ArrowLeft/ArrowRight for desktop.\n\nDesign requirements:\n- Mobile-first, immersive, minimal.\n- In mirror mode: no visible page structure. Only floating buttons with subtle translucent backgrounds.\n- Use safe-area insets (env(safe-area-inset-*)).\n- Avoid scrolling; lock to fullscreen feel.\n- Respect `prefers-reduced-motion`.\n- Accessible: aria-labels for icon buttons; visible focus rings; touch targets >= 44px.\n\nPersistence:\n- Save onboarding answers in localStorage so returning users can optionally skip prompts (but still allow editing via a subtle control on the primer or via a small settings action outside mirror mode).\n- Save closet looks in localStorage (array). Include createdAt timestamp and lookId.\n- Provide safe JSON parsing and handle corrupted storage gracefully.\n\nRouting:\n- Use simple internal view state OR hash-based routing; must work on GitHub Pages subpaths.\n\nBuild & deploy correctness:\n- Configure Vite for GitHub Pages: set `base: './'` in `vite.config.ts`.\n- Ensure assets are referenced relatively (via imports) so they work under subpaths.\n\nDeliverables:\n- Provide all necessary files: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, components, styles, localStorage utilities, outfit data, and at least 12 SVG outfit assets.\n- No TODOs. Everything must be implemented.\n\nSuggested file structure (you may adjust slightly):\n- vite.config.ts\n- index.html\n- src/main.tsx\n- src/App.tsx\n- src/styles/global.css\n- src/components/Primer.tsx\n- src/components/PromptScreen.tsx\n- src/components/MirrorView.tsx\n- src/components/Closet.tsx\n- src/lib/storage.ts\n- src/lib/seededRandom.ts\n- src/data/looks.ts\n- src/assets/outfits/look-*.svg (>= 12)\n\nImplementation notes:\n- The overlay should be centered and scaled responsively (e.g., width: min(92vw, 520px) with max-height constraints) and should not intercept pointer events.\n- Buttons: bottom-right cluster is fine; keep small, unobtrusive.\n- Include a minimal icon set using inline SVG in components (no external icon libs necessary).\n\nOutput requirements:\n- Output ONLY the full file set contents (multiple files) as your final answer, suitable to be written to disk.\n- Do not include explanatory prose outside file contents."
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
    },
    {
      "id": "repair_b664d738ac7a7e04edc8",
      "at": "2026-05-24T08:24:16.263Z",
      "kind": "github_conflict",
      "inputId": "input_46b2c94acaed71f611b2",
      "fromStatus": "SENDING_TO_CODEX",
      "nextStatus": "SENDING_TO_CODEX",
      "code": "GITHUB_409",
      "message": "README.md does not match e9f875bc3397de4d50d5cedba9079eb89981936b"
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
  "title": "MirrorFit — Mobile-first smart mirror (Vite + React + TypeScript, static GitHub Pages app)",
  "summary": "Build a production-ready, serverless, browser-only mobile web app that feels like an immersive mirror: two quick onboarding prompts (mood + destination), then a fullscreen mirrored front-camera view with a minimal outfit overlay. Users swipe left/right to cycle looks, tap “Try again” to generate a fresh suggestion set, and can save/apply looks from a fullscreen Closet gallery persisted in localStorage.",
  "architectureInstructions": [
    "Use Vite + React + TypeScript (no backend). App must build to static assets that work on GitHub Pages, including subpath deployments.",
    "Use local state + localStorage only. No external APIs, no secrets, no serverless functions, no databases.",
    "Keep UI minimal and camera-first: once in mirror mode, there must be no page layout around the camera (no headers/sidebars/panels). Only small floating controls over the video.",
    "Implement a simple deterministic outfit recommendation system using static look definitions + tags (mood/destination). Use seeded shuffle based on mood/destination and a “try again” counter.",
    "Persist onboarding answers (mood/destination + free text) and saved looks to localStorage. Ensure schema versioning or safe parsing.",
    "Handle camera permissions gracefully: primer screen, error state for denial, and a retry flow.",
    "Support swipe gestures on mobile via Pointer Events and keyboard arrows on desktop.",
    "Offline-capable by design: all looks/overlays are local static assets; no network fetches required after initial load."
  ],
  "frontendInstructions": [
    "Screens/flow (single-page app with internal view state is fine): (1) Permission Primer → (2) Mood Prompt (chips + optional free text) → (3) Destination Prompt (chips + optional free text) → (4) Mirror View (main) → (5) Closet Gallery (fullscreen modal/screen).",
    "Mood prompt: chips like Confident, Cozy, Energetic, Calm, Bold + a free-text field (optional). Destination prompt: Work, Date, Gym, Party, Errands, Travel + free-text (optional). Provide clear CTA to continue.",
    "Mirror view: request front camera (facingMode: 'user') using getUserMedia; show mirrored video (horizontal flip) filling entire screen (object-fit: cover). Prevent page scrolling; use safe-area insets.",
    "Overlay: render a transparent SVG/PNG outfit image centered over the video. It should feel like clothing drawn on top of the person. Keep it subtle and stylish (semi-transparent, soft strokes).",
    "Interaction: swipe left/right anywhere on mirror to change outfit (previous/next). Also support ArrowLeft/ArrowRight.",
    "Controls (floating, minimal): Try again button (regenerates the suggestion set), Closet button (opens fullscreen saved looks), Save button (saves current look). Buttons must be small, circular/rounded, high-contrast, with accessible labels (aria-label) and visible focus states.",
    "Closet gallery: fullscreen overlay with a close button; show a grid of saved looks with thumbnail preview and small metadata (name/time). Tap a saved look to apply instantly and close closet (or keep open but apply immediately).",
    "Visual design: dark/neutral minimal chrome; use subtle blur/transparent backgrounds for buttons; no heavy cards or visible layout in mirror mode. Maintain 60fps feel; keep overlays lightweight.",
    "Accessibility: proper button semantics, focus rings, readable text, touch targets >= 44px, reduced motion respect (prefers-reduced-motion)."
  ],
  "backendInstructions": [
    "None. Do not create any backend. Simulate all behavior locally with static data + localStorage only."
  ],
  "modificationInstructions": [
    "Create the complete initial file set for a new repo. Codex must output a full replacement set of files (package.json, vite config, src, public, assets, etc.). No TODOs or placeholders.",
    "Do not add any server code. Do not depend on private/external APIs. Do not require keys.",
    "Use only client-side generation/selection of outfits from bundled static assets (SVG preferred). Include enough outfit assets to make swiping meaningful (at least 12 distinct looks).",
    "Ensure the app works when deployed under a GitHub Pages subpath. Configure Vite base properly and avoid absolute asset paths that break under subpaths."
  ],
  "acceptanceCriteria": [
    "`npm install`, `npm run build`, and `npm run preview` succeed.",
    "App is mobile-first and feels like a fullscreen mirror: in mirror mode the camera fills the screen with no surrounding layout; only floating controls appear.",
    "On first load, user is prompted for mood then destination (chips + optional free text) before camera starts.",
    "Camera uses front-facing preference and is mirrored horizontally. If permission denied/unavailable, a clear fallback UI appears with retry instructions.",
    "An outfit overlay is automatically chosen based on mood + destination; swiping left/right changes the full outfit; Try again regenerates the set.",
    "User can save the current look; saved looks persist in localStorage and appear in a fullscreen Closet gallery; selecting applies instantly.",
    "Swipe works on touch devices; arrow keys work on desktop; UI remains minimal and polished; accessible labels and focus states are present.",
    "No backend, no network calls for outfit generation; everything is static/local."
  ],
  "codexPrompt": "You are implementing a complete new project from scratch.\n\nReturn a COMPLETE REPLACEMENT FILE SET for a static, serverless, browser-only app that can deploy to GitHub Pages.\n\nProject: MirrorFit\nTech: Vite + React + TypeScript\n\nHard constraints:\n- No backend code, no server, no serverless functions, no DB, no auth, no private APIs, no secrets.\n- All “backend-like” behavior must be done with local state, localStorage, and bundled static sample data/assets.\n- Must work on GitHub Pages including repository subpath deployments.\n\nCore UX:\n1) On open, show a short permission primer screen explaining that the camera is used like a mirror, with a single “Start” button.\n2) Ask “How do you feel?” with selectable chips (Confident, Cozy, Energetic, Calm, Bold) and an optional free-text input.\n3) Ask “Where are you going?” with selectable chips (Work, Date, Gym, Party, Errands, Travel) and an optional free-text input.\n4) Then open the FRONT camera in a fullscreen mirror mode:\n   - The video must fill the entire viewport (object-fit cover), mirrored horizontally (scaleX(-1)).\n   - No surrounding layout, no panels, no sections. Only small floating controls.\n   - Overlay a full outfit image (transparent SVG/PNG) on top of the video.\n5) Interactions in mirror mode:\n   - Swipe left/right anywhere to change the outfit to previous/next.\n   - Provide a small floating “Try again” button to regenerate a new suggestion set of outfits based on mood/destination.\n   - Provide a small floating “Save” button to save the current look to a Closet.\n   - Provide a small floating “Closet” button to open a fullscreen gallery of saved looks.\n6) Closet:\n   - Fullscreen overlay/screen with close button.\n   - Grid of saved looks showing thumbnails (use the same outfit SVG as a thumbnail) and minimal metadata.\n   - Tapping a saved look applies it instantly to the mirror overlay (and closes the closet).\n\nOutfit system (no ML, no APIs):\n- Bundle at least 12 distinct outfit overlay assets in `src/assets/outfits/` as SVG files with transparent background.\n- Create a `looks` data file defining each look: id, name, asset path, tags for moods and destinations (e.g., moods: ['cozy'], destinations: ['work']).\n- Implement selection:\n  - Parse mood chip + mood free text and destination chip + destination free text.\n  - Map free-text keywords to tags (simple dictionary).\n  - Filter looks by matching tags; if none match, fall back to all.\n  - Generate an ordered “suggestion set” via a seeded shuffle using (moodTag + destinationTag + tryAgainCount) so it feels fresh but stable.\n  - Swiping cycles within this suggestion list.\n\nCamera handling:\n- Use `navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false })` with reasonable fallbacks if facingMode not supported.\n- Handle permission denied/unavailable states with a clear fullscreen error UI and a retry button.\n- Stop tracks on unmount.\n\nGestures/keyboard:\n- Implement swipe using Pointer Events on the fullscreen mirror container (track startX, deltaX, threshold).\n- Support ArrowLeft/ArrowRight for desktop.\n\nDesign requirements:\n- Mobile-first, immersive, minimal.\n- In mirror mode: no visible page structure. Only floating buttons with subtle translucent backgrounds.\n- Use safe-area insets (env(safe-area-inset-*)).\n- Avoid scrolling; lock to fullscreen feel.\n- Respect `prefers-reduced-motion`.\n- Accessible: aria-labels for icon buttons; visible focus rings; touch targets >= 44px.\n\nPersistence:\n- Save onboarding answers in localStorage so returning users can optionally skip prompts (but still allow editing via a subtle control on the primer or via a small settings action outside mirror mode).\n- Save closet looks in localStorage (array). Include createdAt timestamp and lookId.\n- Provide safe JSON parsing and handle corrupted storage gracefully.\n\nRouting:\n- Use simple internal view state OR hash-based routing; must work on GitHub Pages subpaths.\n\nBuild & deploy correctness:\n- Configure Vite for GitHub Pages: set `base: './'` in `vite.config.ts`.\n- Ensure assets are referenced relatively (via imports) so they work under subpaths.\n\nDeliverables:\n- Provide all necessary files: `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, components, styles, localStorage utilities, outfit data, and at least 12 SVG outfit assets.\n- No TODOs. Everything must be implemented.\n\nSuggested file structure (you may adjust slightly):\n- vite.config.ts\n- index.html\n- src/main.tsx\n- src/App.tsx\n- src/styles/global.css\n- src/components/Primer.tsx\n- src/components/PromptScreen.tsx\n- src/components/MirrorView.tsx\n- src/components/Closet.tsx\n- src/lib/storage.ts\n- src/lib/seededRandom.ts\n- src/data/looks.ts\n- src/assets/outfits/look-*.svg (>= 12)\n\nImplementation notes:\n- The overlay should be centered and scaled responsively (e.g., width: min(92vw, 520px) with max-height constraints) and should not intercept pointer events.\n- Buttons: bottom-right cluster is fine; keep small, unobtrusive.\n- Include a minimal icon set using inline SVG in components (no external icon libs necessary).\n\nOutput requirements:\n- Output ONLY the full file set contents (multiple files) as your final answer, suitable to be written to disk.\n- Do not include explanatory prose outside file contents."
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
- 2026-05-24T08:24:16.468Z - Auto-fix agent is retrying after a GitHub write conflict (warning) - Attempt 2 of 3.
Original error: README.md does not match e9f875bc3397de4d50d5cedba9079eb89981936b
Code: GITHUB_409
- 2026-05-24T08:24:18.239Z - Sent prompt to Codex (info)

## Latest Error

None.
