import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import apiRegion from "../Redux/Services/apiRegion";
import { updateRegions, updateRegionsData } from "../Redux/Actions/reducerAction";
import { useLocation, useNavigate } from "react-router-dom";

const EditRegionRedux = () => {
    const {state} = useLocation();
    const {id} = state || {};

    let navigate = useNavigate()

    const dispatch = useDispatch();
    const [dataRegions, setDataRegions] = useState({
        regionId : 0,
        regionName : ''
    })

    useEffect(() => {
        apiRegion.getId(id)
        .then(res => {
            setDataRegions ({
                ...dataRegions,
                regionId : res.data.regionId,
                regionName : res.data.regionName
            })
        })
        .catch(error => alert(error))
    }, [])

    const eventHandler = regions => event => {
        setDataRegions ({...dataRegions, [regions]: event.target.value})
    }

    const updateContent = (e) => {
        e.preventDefault();
        dispatch(updateRegionsData(dataRegions))
        navigate('/DataRedux')
    }

    return (
        <div className="Container">
            <form>
            <div class="mb-3">
                <label for="editRegionName" class="form-label">Region Name</label>
                <input value = {dataRegions.regionName} onChange={eventHandler('regionName')}type="text" class="form-control" id="editRegionName" placeholder="Region Name"/>
            </div>
                <button onClick={updateContent} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default EditRegionRedux