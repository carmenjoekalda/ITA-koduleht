import logo from './voco.png';
import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage/>
          }
          />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
