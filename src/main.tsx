import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import MyProvider from "./components/useContext/MyContext.tsx";
import "./index.css";
import "./styles.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyProvider>
      <App />
    </MyProvider>
  </StrictMode>
);
