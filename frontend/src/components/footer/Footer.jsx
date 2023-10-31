import React from 'react'
import './footer.css'
import logo from '../../img/scslogo.png'


function Footer() {
  return (
  <>
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                   
                    <div className="col-lg-4 mb-5 mb-lg-0">
                    <img src={logo} alt="imagen" className='logo'/>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">ACCESORIOS</h4>
                        <p className="lead mb-0">
                            Contacto 
                            <br />
                            (+57)3015968374
                        </p>
                    </div>
                   
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Encuéntranos en redes sociales</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/scs.accesorios/"><i className="fab fa-fw fa-instagram"></i></a>
                    </div>
                   
                </div>
            </div>
        </footer>
        
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; Your Website 2023</small></div>
        </div>
    </>
  )
}

export default Footer