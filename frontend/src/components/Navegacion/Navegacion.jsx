import React, {useContext, useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navegacion.css'
import * as Icon from 'react-icons/fa'
import  Button  from 'react-bootstrap/Button';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/cartContext';
import { Badge } from 'react-bootstrap';
function Navegacion() {
const [click, setClick] = useState(false);
const { cart } = useContext( CartContext )
const navigate = useNavigate()
const {user, saveToken, clearToken} = useContext(UserContext);
//const [button, setButton] = useState(true);

const hadleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
const handleSingout = () => {
  clearToken()
  navigate("/")
};
// const showButton = () => {
//   if (window.innerWidth <= 960) {
//     setButton(false);
//   } else {
//     setButton(true);
//   }
// };

// useEffect(() => {
//   showButton();
// }, []);

// window.addEventListener('resize', showButton);

useEffect(() => {
  const localToken = localStorage.getItem('token')
  saveToken(localToken);
}, [])
  return (
    <>
    <nav className='navbar'>
    <div className='navbar-container'>
          <Link onClick={closeMobileMenu} className='navbar-logo'> SCS Accesorios
          
          {/* <img src={logo} alt="imagen" className='navbar-logo'/> */}
          </Link>     

    
    <div className='menu-icon' onClick={hadleClick}>
    {click ? <Icon.FaTimes/> : <Icon.FaBars/>} 
    </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'><Link className='nav-links' to="/"  onClick={closeMobileMenu}>Home</Link></li>
          <li className='nav-item'><Link className='nav-links' to="/Productos"  onClick={closeMobileMenu}>Productos</Link></li>
          {!user.token && <li className='nav-item'><Link className='nav-links' to="/LogIn" onClick={closeMobileMenu}>LogIn</Link></li>}
          <li className='nav-item'><Link className='nav-links' to="/SignUp" onClick={closeMobileMenu}>SingUp</Link></li>
          {!user.token && <li className='nav-item'><Link className='nav-links' to="/Perfil" onClick={closeMobileMenu}>Perfil</Link></li>}
         {user.token && <li className='nav-item'><Link className='nav-links'  onClick={handleSingout}>Exit</Link></li>} 
        </ul>
     </div>
     <div>
      <Link to='/cart'><Badge><Icon.FaDollyFlatbed/>{cart.total}</Badge></Link>
     </div>
    </nav>
       
    </>
  )
}

export default Navegacion