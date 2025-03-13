import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Tunniplaan from './pages/Tunniplaan';
import Kontaktid from './pages/Kontaktid';
import HomePage from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tunniplaan" element={<Tunniplaan />} />
          <Route path="/kontaktid" element={<Kontaktid />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
