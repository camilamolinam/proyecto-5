import {useContext} from 'react'
import {Row, Col, Badge, Button, Alert} from 'react-bootstrap'
import { CartContext } from '../../context/cartContext'


function CartItem({item}) {
    const { decreaseProductFromCart, addProductToCart } = useContext(CartContext)

    return(
        <Row>
            <Col md={2}>
                <Button variant="light" className='m-2 mt-0' onClick={
                    () => {decreaseProductFromCart(item)}
                }>-</Button>
                <Badge bg="dark" style={{ fontSize: '1.1em' }}>{item.quantity}</Badge>
                <Button variant="success" className='m-2 mt-0' onClick={
                    () => {addProductToCart(item)}
                }>+</Button>
            </Col>
            <Col>
                {item.nombre}
            </Col>
            <Col>
                {item.descripcion && item.descripcion.length? (
                        item.descripcion
                    ): (
                        <Alert variant='warning'>No hay descripción</Alert>
                    )
                }
            </Col>
            <Col>
                { item.precio}
            </Col>

            <Col>
                { item.precio * item.quantity }
            </Col>
        </Row>
    )
}

export default CartItem