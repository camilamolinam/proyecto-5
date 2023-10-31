import React, { useState } from 'react'

const UserContext = React.createContext();
const { Provider, Consumer } = UserContext;

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        token: null,
        rol: null
    })

    const saveToken = (token, rol) => {
        localStorage.setItem('token', token)
        localStorage.setItem('rol', rol)
        setUser({ token, rol })
    }

    const clearToken = () => {
        localStorage.clear()
        setUser({
            token: null
        })
    }
    

    return (
        <Provider value={{ user, saveToken, clearToken }}>
            {children}
        </Provider>
    )
}

export { UserProvider, Consumer as UserConsumer, UserContext }