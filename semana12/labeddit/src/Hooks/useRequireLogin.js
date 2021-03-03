import { goToLoginPage } from "../Router/Coordinator"
const { useEffect } = require("react")
const { useHistory } = require("react-router-dom")
const { default: useToken } = require("./UseToken")

const useRequireLogin = (logged, setLogged) => {
    const token = useToken()
    const history = useHistory()
    
    useEffect(() => {
        if (!token || !logged) {
            localStorage.removeItem("token")
            setLogged(false)
            goToLoginPage(history)
        }
    }, [token, history])
}

export default useRequireLogin