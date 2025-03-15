import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Praktika from "./pages/Praktika";
import Erialad from "./pages/Erialad";
import ErialaTutvustus from "./pages/ErialaTutvustus";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/praktika" element={<Praktika />} />
        <Route path="/erialad" element={<Erialad/>}/>
        <Route path="/erialad/:id" element={<ErialaTutvustus/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;