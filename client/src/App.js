import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/Home";
import Praktika from "./pages/Praktika";

function App() {
  const isGitHubPages = process.env.PUBLIC_URL.includes('github.io');  
  console.log(isGitHubPages)
  return (
    <BrowserRouter basename={isGitHubPages ? "/ITA-koduleht" : ""}>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/praktika" element={<Praktika />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
