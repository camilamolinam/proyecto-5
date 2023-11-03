import React, { useContext, useState } from 'react'
import {CartContext} from '../../context/cartContext'
import { Row, Col, ListGroup, Alert } from 'react-bootstrap'
import CartItem from './CartItem'
import './Cart.css'

import { PayPalButtons } from '@paypal/react-paypal-js'

function Cart() {
  const {cart} = useContext(CartContext)
  const style = {"layout":"vertical"};
  const [isPaid, setIsPaid] = useState(false)
  //iva varia segun el pais 
  

  const handleCreateOrder = (data, actions) => {
    const order = actions.order.create({
        purchase_units: [
            {
                amount: {
                    value: (cart.amount).toFixed(2),
                   // currency_code: "COP"
                },
                description: "Compra de productos en SGS ACCESORIOS",
                shipping_preference: "NO_SHIPPING"
            }
        ],
        merchant_name: "SCS ACCESORIOS"
        
    })

    console.log("order", order)

    return order

}

const handleCancelledPayment = (data, actions) => {
    console.log("data", data)
    console.log("actions", actions)

}

const handlePaidOrder = (data, actions) => {
    console.log("data", data)
    console.log("actions", actions)
    setIsPaid(true)
}
    return (
    <>
        <div>
           {cart.items && cart.items.length > 0 ?
        (
            <>
                <Row>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>
                            <Row>
            <Col md={2}>
                <Alert variant="secondary">Cantidad</Alert>
            </Col>
            <Col>
                <Alert variant="secondary">Producto</Alert>
            </Col>
            <Col>
                <Alert variant="secondary">Detalle</Alert>
            </Col>
            <Col>
                <Alert variant="secondary">Precio</Alert>
            </Col>
            <Col>
                <Alert variant="secondary">Subtotal</Alert>
            </Col>
        </Row>
                            </ListGroup.Item>
                             {
                                cart.items.map(item => {
                                    return(
                                        <ListGroup.Item>
                                                <CartItem item = {item}/>
                                        </ListGroup.Item>
                                    )
                                })
                             }   
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    Productos:{cart.total}
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Subtotal: {cart.amount}
                    </Col>
                </Row>
                <Row>
                    <Col>
                             <span className='text-bold'> A pagar <sub>(Subtotal)</sub></span>: { cart.amount}
                    </Col>
                </Row>
                <hr/>
                      <div className='paypalcontent'>
                        <Row>
                            <Col md={4}>
                                {!isPaid ? (
                                    <PayPalButtons
                                        // disabled={false}
                                        forceReRender={[style]}
                                        fundingSource={undefined}
                                        createOrder={handleCreateOrder}
                                        onApprove={ handlePaidOrder }
                                        onCancel={ handleCancelledPayment}
                                    />
                                    ): (
                                        <Alert variant='success'>Pago realizado</Alert>
                                    )
                                }
                                
                            </Col>
                        </Row>
                        </div>  


            </>
        ):(
            <h1>No hay productos en el carrito</h1>
        )   
        } 
        </div>
    </>
  )
}

export default Cart