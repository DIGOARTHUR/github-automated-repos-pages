import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ReleaseNotificationProvider } from "../src/context/ReleaseNotificationContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReleaseNotificationProvider>
      <App />
    </ReleaseNotificationProvider>
  </React.StrictMode>
);
