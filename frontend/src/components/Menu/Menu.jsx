import React from 'react'
import { productos } from './productos'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './menu.css'

function Menu() {
  return (
    <div className='contenedormenu'>
    
    <div>
       
      <div className='cards-wrap'>
       
        {productos.map( (producto, index) => {
          return(
            <Card className='card-menu' key={index} style={{ width: '20rem', backgroundColor:'black',color:'white'}}>
            <Card.Img variant="top" src={producto.img} style={{width:'20rem',height:'15rem'}}/>
            <Card.Body>
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text>
              {producto.descripcion}
              </Card.Text>
              <Button variant="outline-light">{producto.precio}</Button>
            </Card.Body>
          </Card>
          )
        })}
       
      </div>
      </div>
     
    <div/>
    </div>
  )
}

export default Menu