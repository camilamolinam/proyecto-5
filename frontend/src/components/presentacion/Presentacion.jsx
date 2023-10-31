import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './presentacion.css'
import img1 from '../../img/earcuff dorado.jpeg'
import img2 from '../../img/earcuff goma 2.jpeg'
import img3 from '../../img/earcuff metalico.jpeg'


function Presentacion() {
    return (
        <>
            <div className='carouseldiv'>
                <Carousel fade>

                    <Carousel.Item>

                        <img className="d-block w-100 img-fluid" src={img1} alt="First slide" />

                        <Carousel.Caption>

                            <p>Earcuffs dorados y plateados</p>

                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>

                        <img className="d-block w-100 img-fluid" src={img2} alt="First slide" />

                        <Carousel.Caption>

                            <p>Earcuffs gomma </p>

                        </Carousel.Caption>

                    </Carousel.Item>

                    <Carousel.Item>

                        <img className="d-block w-100 img-fluid" src={img3} alt="First slide" />

                        <Carousel.Caption>

                            <p> Earcuffs metalicos colores</p>

                        </Carousel.Caption>

                    </Carousel.Item>
                   
                </Carousel>

            </div>



        </>



    )

}



export default Presentacion