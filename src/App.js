import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NavBarComponent from './Components/Nav';
import Reclamacion from './pages/Reclamacion';

function App() {
  return (
    <div className='form_container'>
      <NavBarComponent/>    
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/reclamacion' element={<Reclamacion/>} />
        </Routes>
      </BrowserRouter>        
    </div>
  );
}

export default App;
