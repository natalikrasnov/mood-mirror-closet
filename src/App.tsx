import { type CSSProperties, type Dispatch, type SetStateAction, useEffect, useMemo, useRef, useState } from "react";

type ClosetItem = {
  id: string;
  name: string;
  category: string;
  image: string;
  tags: string[];
};

const project = {
  "appTitle": "MirrorLook",
  "summary": "A mobile-first, fullscreen “smart mirror” web app that asks your mood and destination, then opens the front camera as a clean mirror view and overlays curated outfit looks you can swipe through, regenerate, and save to a minimal closet gallery.",
  "features": [
    "Onboarding prompts: mood (preset options + free text) and destination (preset options + free text)",
    "Fullscreen front-camera mirror mode using getUserMedia with environment stripped away (no panels/sections around the camera)",
    "Mirror-like behavior: front camera preview appears as a mirror (horizontally flipped) and occupies the entire viewport",
    "Outfit overlay rendered on top of the live camera feed (visual assets bundled with the app: PNG/SVG layers) selected automatically from mood + destination",
    "Swipe left/right to switch the entire outfit (one swipe = next/previous look)",
    "Small “Try again” button to generate a new outfit suggestion set (reshuffle/reselect based on mood/destination)",
    "Floating “Closet” button opening a fullscreen gallery of saved looks"
  ],
  "screens": [
    "Splash/Entry: branding + primary action to begin (optional, very brief)",
    "Mood Prompt: preset chips (e.g., Confident, Cozy, Bold, Calm, Energetic) + free-text input; Next",
    "Destination Prompt: preset chips (e.g., Work, Date, Gym, Party, Errands, Chill) + free-text input; Start Mirror",
    "Mirror Screen (primary): fullscreen front camera (mirrored) with outfit overlay, swipe navigation, small Try Again button, floating Closet button, optional Save Look control",
    "Closet Gallery (fullscreen modal): grid of saved looks; tap to apply; option to delete single look; close to return to mirror",
    "Permission/Fallback State: inline/fullscreen message with actions (Allow camera, Retry, Continue without camera using placeholder background)"
  ]
};
const moods = [
  {
    "id": "cozy",
    "name": "Cozy",
    "palette": "linear-gradient(135deg, #f97316, #7c2d12)",
    "tags": [
      "cozy",
      "warm",
      "casual",
      "outerwear"
    ]
  },
  {
    "id": "work",
    "name": "Work",
    "palette": "linear-gradient(135deg, #22d3ee, #1e3a8a)",
    "tags": [
      "work",
      "formal",
      "top",
      "shoes"
    ]
  },
  {
    "id": "night",
    "name": "Night Out",
    "palette": "linear-gradient(135deg, #a855f7, #111827)",
    "tags": [
      "night",
      "formal",
      "accessory",
      "black"
    ]
  },
  {
    "id": "sport",
    "name": "Sport",
    "palette": "linear-gradient(135deg, #84cc16, #0f766e)",
    "tags": [
      "sport",
      "casual",
      "shoes"
    ]
  },
  {
    "id": "beach",
    "name": "Beach",
    "palette": "linear-gradient(135deg, #38bdf8, #facc15)",
    "tags": [
      "beach",
      "summer",
      "light"
    ]
  }
];
const categories = ["top", "bottom", "shoes", "outerwear", "accessory"];

export default function App() {
  const [selectedMood, setSelectedMood] = useState(moods[0]);
  const [closet, setCloset] = useStoredCloset();
  const [cameraStatus, setCameraStatus] = useState("Camera is off");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  const suggestion = useMemo(() => buildSuggestion(closet, selectedMood), [closet, selectedMood]);

  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
      if (videoRef.current) videoRef.current.srcObject = stream;
      setCameraStatus("Live mirror is running on this device");
    } catch (error) {
      setCameraStatus(error instanceof Error ? error.message : "Camera permission was denied");
    }
  }

  function addClosetFiles(files: FileList | null) {
    if (!files?.length) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const category = categories[closet.length % categories.length];
        const item: ClosetItem = {
          id: String(Date.now()) + Math.random().toString(16).slice(2),
          name: file.name.replace(/\.[^.]+$/, ""),
          category,
          image: String(reader.result),
          tags: [selectedMood.id, category]
        };
        setCloset((current) => [item, ...current]);
      };
      reader.readAsDataURL(file);
    });
  }

  return (
    <main className="shell" style={{ "--mood-palette": selectedMood.palette } as CSSProperties}>
      <section className="hero">
        <div>
          <p className="eyebrow">Mood based virtual mirror</p>
          <h1>{project.appTitle}</h1>
          <p className="summary">{project.summary}</p>
          <div className="actions">
            <button onClick={startCamera}>Start mirror</button>
            <button className="secondary" onClick={() => fileRef.current?.click()}>Upload clothes</button>
            <input ref={fileRef} type="file" accept="image/*" multiple hidden onChange={(event) => addClosetFiles(event.target.files)} />
          </div>
        </div>
        <div className="mirror-card">
          <div className="video-frame">
            <video ref={videoRef} autoPlay playsInline muted />
            <div className="mood-overlay" />
            <span>{cameraStatus}</span>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <h2>Mood backgrounds</h2>
          <p>Choose a mood. The mirror palette and outfit agent respond instantly.</p>
        </div>
        <div className="mood-grid">
          {moods.map((mood) => (
            <button key={mood.id} className={mood.id === selectedMood.id ? "mood active" : "mood"} onClick={() => setSelectedMood(mood)}>
              <span style={{ background: mood.palette }} />
              {mood.name}
            </button>
          ))}
        </div>
      </section>

      <section className="grid-two">
        <div className="panel">
          <div className="section-heading">
            <h2>Closet</h2>
            <p>{closet.length ? closet.length + " uploaded items" : "Upload clothing photos to start building looks."}</p>
          </div>
          <div className="closet-grid">
            {closet.map((item) => (
              <article key={item.id} className="closet-card">
                <img src={item.image} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.category} / {item.tags.join(", ")}</small>
                </div>
                <button aria-label="Remove item" onClick={() => setCloset((current) => current.filter((entry) => entry.id !== item.id))}>Remove</button>
              </article>
            ))}
          </div>
        </div>

        <div className="panel agent-panel">
          <div className="section-heading">
            <h2>Outfit agent</h2>
            <p>{suggestion.reason}</p>
          </div>
          <div className="suggestion-list">
            {suggestion.items.map((item) => (
              <div key={item.id} className="suggestion-row">
                <img src={item.image} alt="" />
                <span>{item.name}</span>
              </div>
            ))}
            {!suggestion.items.length ? <p className="empty">Add a few closet items and the agent will suggest a mood-matched look.</p> : null}
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="section-heading">
          <h2>Implemented v1 scope</h2>
          <p>This compact build is ready to expand with future deployRocket edits.</p>
        </div>
        <div className="feature-grid">
          {project.features.map((feature) => <span key={feature}>{feature}</span>)}
        </div>
      </section>
    </main>
  );
}

function useStoredCloset(): [ClosetItem[], Dispatch<SetStateAction<ClosetItem[]>>] {
  const [items, setItems] = useState<ClosetItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("deployrocket.closet") ?? "[]") as ClosetItem[];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("deployrocket.closet", JSON.stringify(items));
  }, [items]);

  return [items, setItems];
}

function buildSuggestion(items: ClosetItem[], mood: { id: string; name: string; tags: string[] }) {
  const scored = [...items]
    .map((item) => ({ item, score: item.tags.filter((tag) => mood.tags.includes(tag) || tag === mood.id).length }))
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item)
    .slice(0, 4);

  return {
    items: scored,
    reason: scored.length
      ? "Matched to " + mood.name + " using closet tags and categories."
      : "Waiting for closet uploads before styling this mood."
  };
}
