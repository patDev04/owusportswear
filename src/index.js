import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./Data/content";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router basename="owusportswear">
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
