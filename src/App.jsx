import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Brutus from "./pages/Brutus";
import FasterThanYou from "./pages/FasterThanYou";
import ShaderShowcase from "./pages/ShaderShowcase";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brutus" element={<Brutus />} />
        <Route path="/faster-than-you" element={<FasterThanYou />} />
        <Route path="/shader-showcase" element={<ShaderShowcase />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
