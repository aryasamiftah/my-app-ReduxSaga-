import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRegionsData, getRegions, getRegionsData, removeRegions } from "../Redux/Actions/reducerAction";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const RegionsRedux = () => {
    let navigate = useNavigate()

    let regions = useSelector(state => state.regionReducers.regions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRegionsData());
    });

    const editdata = (id) => {
        navigate('/editData', {state : {id}})
    }

    const deletedata = (regionId) => {
        dispatch(deleteRegionsData(regionId))
    }

    return (
        <div className="container">
            <Link to = {'/addData'}className="btn btn-primary">Add</Link>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">RegionId</th>
                        <th scope="col">Region Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        regions && regions.map((regions, i) => {
                            return (
                                <tr>
                                    <td>{i + 1}</td>
                                    <td>{regions.regionId}</td>
                                    <td>{regions.regionName}</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={()=>editdata(regions.regionId)}>Edit</button>
                                        &nbsp;<button className= "btn btn-danger" onClick={()=>deletedata(regions.regionId)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RegionsRedux