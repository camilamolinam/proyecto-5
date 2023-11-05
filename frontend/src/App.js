
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import SignUp from './components/usuario/SignUp';
import Login from './components/usuario/Login';
import Navegacion from './components/Navegacion/Navegacion';
import Productos from './components/Productos/Productos';
import Perfil from './components/usuario/Perfil';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import Cart from './components/Cart/Cart';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';


import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
  const { user } = useContext(UserContext)

  return (
    <div className="App">
      <Navegacion />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/LogIn' element={<Login />} />
        <Route path='/Perfil' element={<Perfil />} />
        <Route path='/cart' element={ <PayPalScriptProvider options={{ "client-id": "AXfERKq-apZXQD_JGtKaWic1P5QVkDcXUVfiAuaoNw9kkGQGv0mzZE5fPUb7i6B5mC6EcNpFqxSOzcg_"}}>
            <Cart />
          </PayPalScriptProvider>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
