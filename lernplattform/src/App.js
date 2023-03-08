import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import World from "./pages/World";
import Level from "./pages/Level";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="world" element={<World />} />
          <Route path="level" element={<Level />} />
        </Routes>
      </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
