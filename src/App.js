
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/views/Home';
import Features from './components/views/Features';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/features' element={<Features />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
