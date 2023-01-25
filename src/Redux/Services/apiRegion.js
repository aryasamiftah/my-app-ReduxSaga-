import axios from "../../Config/http-common"

const getAll = () => {
    return axios.get("/regions/all")
}

const getId = id => {
    return axios.get(`/regions/${id}`)
}


const create = async (data) =>  {
     try {
        const result = await axios.post("/regions/create", data)
        return result
     } catch (error) {
        return error.message
     }
}

const update = async (data) => {
    try{
        const result = await axios.put(`/regions/edit/${data.regionId}`, data)
        return result
    }catch (error){
        error.message
    }
    
}

const remove = id => {
    return axios.delete(`/regions/delete/${id}`)
}

// const removeAll =  {
//     return axios.delete('/regions')
// }

// const findById = id => {
//     return axios.get(`/regions?id=${id}`)
// }

const apiRegion = {
    getAll,
    getId,
    create,
    update,
    remove
}

export default apiRegion

// const list = async () => {
//     try {
//         const result = await axios.get("/user");

//         return result
//     }catch(err){
//         return err.messeage
//     }
// }