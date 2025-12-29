import { Routes, Route } from "react-router-dom";
import { Landing } from "./screens/Landing";
import { TermsAndConditions } from "./screens/TermsAndConditions";
import { PrivacyPolicy } from "./screens/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <div className="w-full !h-full scroll-smooth">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
