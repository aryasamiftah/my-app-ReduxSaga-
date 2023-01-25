import React, {useState} from "react"
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { createRegions, createRegionsData } from "../Redux/Actions/reducerAction"

const AddRegionsRedux = () => {
    let navigate = useNavigate()


    const dispatch = useDispatch();
    const [dataRegions, setDataRegions] = useState({
        regionName : ''

    })

    const eventHandler = regions => event =>{
        setDataRegions ({...dataRegions, [regions]: event.target.value})
    }

    const addData = (e) => {
        e.preventDefault();
        dispatch(createRegionsData(dataRegions))
        navigate('/DataRedux');
    } 

    return (
        <div className="container">
            <form>
                <div class="mb-3">
                    <label for="Region Name" class="form-label">Region Name</label>
                    <input value = {dataRegions.id} onChange={eventHandler('regionName')} type="text" class="form-control" placeholder="Region Name"/>
                </div>

                <button onClick={addData} class="btn btn-primary">Tambah</button>
            </form>
        </div>

    )
}

export default AddRegionsRedux