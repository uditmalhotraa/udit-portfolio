import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { DarkModeContextProvider } from "./contexts/DarkModeContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </DarkModeContextProvider>
);
