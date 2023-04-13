import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import World from "./pages/World";
import Level from "./pages/Level";
import Level_betriebssysteme from "./pages/level_betriebssysteme";
import Finish from "./pages/finish";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="world" element={<World />} />
          <Route path="level" element={<Level />} />
            <Route path="level_betriebssysteme" element={<Level_betriebssysteme />} />
            <Route path="finish" element={<Finish />} />
        </Routes>
      </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
