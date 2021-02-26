import axios from "axios"
import { BASE_URL } from "../Constants/BaseUrl"

const useCreateData = (token) => {
    const create = (urlEnd, body, updateFunction) => {
        axios.post(`${BASE_URL}/${urlEnd}`,
            body,
            { headers: { Authorization: token } })
            .then(() => {
                updateFunction()
            })
            .catch(error => {
            })
    }

    return create
}

export default useCreateData