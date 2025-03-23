import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Praktika from "./pages/Praktika";
import Erialad from "./pages/Erialad";
import ErialaTutvustus from "./pages/ErialaTutvustus";
import Tegija from "./pages/Tegija";
import Voistlused from "./pages/Voistlused";
import Tunnustused from "./pages/Tunnustused";
import Tunnustus from "./pages/Tunnustus";
import Tunniplaan from "./pages/Tunniplaan";
import Kontakt from "./components/Kontakt";
import Test from "./pages/test";
import AdminLogin from "./pages/AdminLogin";
import { AuthProvider } from "./AuthContext";
import { EventProvider } from "./components/EventContext";
function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/praktika" element={<Praktika />} />
            <Route path="/erialad" element={<Erialad />} />
            <Route path="/erialad/:id" element={<ErialaTutvustus />} />
            <Route path="/tegija" element={<Tegija />} />
            <Route path="/voistlused" element={<Voistlused />} />
            <Route path="/tunniplaan" element={<Tunniplaan />} />
            <Route path="/tunnustused" element={<Tunnustused />} />
            <Route path="/tunnustus" element={<Tunnustus />} />
            <Route path="/kontaktid" element={<Kontakt />} />
            <Route path="/test" element={<Test />} />
            <Route path="/admin" element={<AdminLogin />} />
          </Routes>
        </HashRouter>
      </EventProvider>
    </AuthProvider>
  );
}

export default App;
