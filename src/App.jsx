import { Routes, Route } from "react-router-dom";
import { Landing } from "./screens/Landing";

function App() {
  return (
    <>
      <div className="w-full !h-full scroll-smooth">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
