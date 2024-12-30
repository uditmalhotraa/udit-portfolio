import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./screens/Landing";

function App() {
  return (
    <>
      <div className="w-full h-full ">
        <BrowserRouter basename={"/udit-portfolio"}>
          <Routes>
            <Route index element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
