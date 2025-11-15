import { createRoot } from "react-dom/client";
import { HashRouter } from 'react-router-dom';
import RouterApp from "./RouterApp";
// Use Tailwind generator entry so unused utilities are purged in build
import "./tailwind.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <RouterApp />
  </HashRouter>
);