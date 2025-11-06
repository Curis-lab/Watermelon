import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import *  as serviceWorker from './serviceWorker.ts';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
serviceWorker.register();