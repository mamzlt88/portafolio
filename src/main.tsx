
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  // Use Tailwind generator entry so unused utilities are purged in build
  import "./tailwind.css";

  createRoot(document.getElementById("root")!).render(<App />);
  