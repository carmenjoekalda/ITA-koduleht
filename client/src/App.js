import logo from './voco.png';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';

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
