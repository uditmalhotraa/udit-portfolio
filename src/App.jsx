import { Routes, Route } from "react-router-dom";
import { Landing } from "./screens/Landing";

function App() {
  return (
    <>
      <div className="w-full h-full ">
        <Routes basename="/udit-portfolio">
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
