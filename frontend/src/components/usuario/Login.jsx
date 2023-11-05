import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2'
import './SignUp.css'
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  /*declaramos los valores y funciones a utilizar del context*/
  const {user, saveToken} = useContext(UserContext)
  const navigate = useNavigate()
  //este guarda los valores del formulario
  const [formData, setFormData] = useState({
    password: '',
    email: ''
  })

   const onSave = async (event) =>{
    event.preventDefault();
    
    await fetch('https://scsaccesorios.onrender.com/api/logIn', {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(result => {
      Swal.fire(result.message)
      /*Funcion de user context para guardar el token*/
      console.log(result.token);
      saveToken(result.token)
      navigate("/Perfil")
    });
    
  }

  const onChange = (e) =>{
      setFormData({
        ...formData, [e.target.name]: e.target.value
      })
  }

  useEffect(() =>{
    if(user.token){
      navigate('/Perfil')
    }
  }, [])


  return (
    <>
    <div className="wrap">
    <div className='formContent'>
   <Form onSubmit={onSave} className='form-reserva'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' value={formData.email} onChange={onChange} placeholder="Escribe tu email" />
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' value={formData.password} onChange={onChange} placeholder="Escribe password" />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
   </div>
   
    </div>
    </>
  )
}

export default Login