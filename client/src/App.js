import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Praktika from "./pages/Praktika";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/praktika" element={<Praktika />} />
      </Routes>
    </HashRouter>
  );
}

export default App;