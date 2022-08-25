import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import UsuarioFunction from './pages/CrudUsuario/UsuarioFunction';


function App() {
  return (
    <Router>
      <div className='Container'>
        <Header nome="Adrieli"/>
        <Routes>
          <Route path='/usuarioFunction' element={<UsuarioFunction/>}/>  
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
