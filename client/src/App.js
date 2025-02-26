import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Tunniplaan from './pages/Tunniplaan';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tunniplaan />} /> {/* to be replaced with Home page */}
        <Route path="/tunniplaan" element={<Tunniplaan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
