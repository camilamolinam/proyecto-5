import React from 'react'
import { bebidas } from './productos'
import { Card, Button } from 'react-bootstrap'
function Bebidas() {
  return (
    <>
         <div>
    <h1 className='titulo-prod1'>Bebidas</h1>
    
      <div className='cards-wrap'>
       
        {bebidas.map( (bebidas, index) => {
          return(
            <Card className='card-menu' key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={bebidas.img} />
            <Card.Body>
              <Card.Title>{bebidas.nombre}</Card.Title>
              <Card.Text>
              {bebidas.descripcion}
              </Card.Text>
              <Button variant="primary">{bebidas.precio}</Button>
            </Card.Body>
          </Card>
          )
        })}
       
      </div>
      </div>
    </>
  )
}

export default Bebidas