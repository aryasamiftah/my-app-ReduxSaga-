import Axios  from "axios"
import config from "../Config/Config"

const ApiLogin = {
    login : async (username, password) => {
        let option = {
            url : config.base_url+'Login',
            method : 'POST',
            headers : {
                'Content-Type' : 'Application/json'
            },
            data : {
                username : username,
                password : password
            }
        }

        

        try{
            let result = await Axios(option)

            return result.data
        } catch (error) {
            return error
        }
    }
}

export default ApiLogin