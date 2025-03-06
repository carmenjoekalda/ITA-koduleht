import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Praktika from "./pages/Praktika";

function App() {
  return (
    <BrowserRouter basename="/ITA-koduleht">
      <Routes>
      <Route index element={<HomePage />} />
        <Route path="/praktika" element={<Praktika />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;