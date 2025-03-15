import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Praktika from "./pages/Praktika";
import Erialad from "./pages/Erialad";
import ErialaTutvustus from "./pages/ErialaTutvustus";
import Tegija from './pages/Tegija';
import Voistlused from './pages/Voistlused';
import Tunnustused from './pages/Tunnustused';
import Tunnustus from './pages/Tunnustus';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/praktika" element={<Praktika />} />
        <Route path="/erialad" element={<Erialad/>}/>
        <Route path="/erialad/:id" element={<ErialaTutvustus/>}/>
        <Route path="/tegija" element={<Tegija />} />
        <Route path="/voistlused" element={<Voistlused />} />
        <Route path="/tunniplaan" element={<Tunnustused />} />
        <Route path="/tunnustused" element={<Tunnustused />} />
        <Route path="/tunnustus" element={<Tunnustus />} />
      </Routes>
    </HashRouter>

  );
}

export default App;