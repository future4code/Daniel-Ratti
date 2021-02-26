import React, { useContext } from 'react'
import LoggedContext from '../Context/LoggedContext'
import { goToLoginPage } from '../Router/Coordinator'

const LogoutButton = (props) => {
    const {setLogged} = useContext(LoggedContext)

    const onClickLogout = () => {
        localStorage.removeItem("token")
        setLogged(false)
        goToLoginPage(props.history)
    }

    return (
        <button
            onClick={onClickLogout}
        >Logout</button>
    )
}

export default LogoutButton