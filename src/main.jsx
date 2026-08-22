import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";

// Fonts
import "@fontsource/archivo-narrow/400.css";
import "@fontsource/archivo-narrow/700.css";

import "@fontsource/newsreader/400.css";
import "@fontsource/newsreader/500.css";

import "@fontsource/courier-prime/400.css";

import "@fontsource/eb-garamond/400.css";
import "@fontsource/eb-garamond/500.css";
import "@fontsource/eb-garamond/600.css";
import "@fontsource/eb-garamond/700.css";

import "@fontsource/protest-guerrilla/400.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
