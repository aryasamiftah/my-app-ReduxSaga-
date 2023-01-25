import React from 'react'
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
import KirimAngka from '../ParentChild/kirimangka'
import ReactTable from '../ParentChild/datatablereactparent'
import Login from '../latihanKomponen/formlogin'
import RegionsRedux from '../Pages/regionsRedux'
import AddRegionsRedux from '../Pages/addRegionsRedux'
import EditRegionRedux from '../Pages/editRegionsRedux'


const PathRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Kalkulator" element={<PrivateRoute><KirimAngka/></PrivateRoute>}/>
            <Route path= "/Table" element={<PrivateRoute><ReactTable/></PrivateRoute>}/>
            <Route path="/DataRedux" element={<PrivateRoute><RegionsRedux/></PrivateRoute>}/>
            <Route path="/addData" element={<PrivateRoute><AddRegionsRedux/></PrivateRoute>}/>
            <Route path="/editData" element={<PrivateRoute><EditRegionRedux/></PrivateRoute>}/>
            <Route path="/Logout" element={<Logout></Logout>}/>
            </Routes>
        </BrowserRouter>
    )
} 

const PrivateRoute = (props) => {
    const token = localStorage.getItem('token')
    if(!token) return <Navigate to ='/'/>
    return props.children
}

const Logout = (props) => {
    const removeToken = localStorage.removeItem('token')
    if(removeToken)
    return <Navigate to='/login'/>
    return props.childern
}

export default PathRoutes

