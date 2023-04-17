import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import World from "./pages/World";
import Level_bs1 from "./pages/level_bs1";
import Level_bs2 from "./pages/level_bs2";
import Level_bs3 from "./pages/level_bs3";
import Level_adk1 from "./pages/level_adk1";
import Level_adk2 from "./pages/level_adk2";
import Level_adk3 from "./pages/level_adk3";
import Finish from "./pages/finish";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="world" element={<World />} />
          <Route path="level_adk1" element={<Level_adk1 />} />
            <Route path="level_adk2" element={<Level_adk2 />} />
            <Route path="level_adk3" element={<Level_adk3 />} />
            <Route path="level_bs1" element={<Level_bs1 />} />
            <Route path="level_bs2" element={<Level_bs2 />} />
            <Route path="level_bs3" element={<Level_bs3 />} />
            <Route path="finish" element={<Finish />} />
        </Routes>
      </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
