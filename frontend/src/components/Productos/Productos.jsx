import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../context/cartContext';
import './Productos.css'
function Productos() {

    const {addProductToCart} = useContext(CartContext)
    const [productos, setProductos] = useState([]);
    const uri_img = '../../img/'

    useEffect(() => {
        fetch('http://localhost:3001/productos/getProdList')
            .then(req => req.json()).then(result => setProductos(result.data))
    }, [])
   
    return (
    <div className='contenedormenu'>
        <div>
            <div className='cards-wrap'>
                {productos.map((producto, index) => {
                    return (
                    <Card className='card-menu' key={index} style={{ width: '18rem', background: 'transparent' }}>
                    <Card.Img variant="top" src={`http://localhost:3001/`+producto.img} />
                    <Card.Body>
                      <Card.Title>{producto.nombre}</Card.Title>
                      <Card.Text>
                      {producto.descripcion}
                      </Card.Text>
                      <Card.Text>
                      {producto.precio}
                      </Card.Text>
                      <Card.Text>
                      {producto.existencias}
                      </Card.Text>
       
                      <Button variant="primary" onClick={() => addProductToCart(producto)}>Comprar</Button>
                    </Card.Body>
                  </Card>
                )
            })}
            </div>
         </div>
    </div>


    )
}

export default Productos