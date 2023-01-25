import React, {useState} from 'react'

const DapatData = (props) => {
    const[search, setSearch] = useState('')
    const filterData = props.data.filter(item => {
        if(search === ''){
            return item
        }else{
            return item.emp_fullname.toLowerCase().includes(search)
        }
    })
    
    return (
    <div>
        <input type="search" onChange={event=>setSearch(event.target.value.toLowerCase())}></input>
        <table class = "table">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Id</th>
                    <th scope="col">FullName</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Department</th>
                    <th scope="col">Sisa Cuti</th>
                </tr>
            </thead>
        <tbody>
            {filterData.map((k,i)=>
            <tr>
                <td>{i+1}</td>
                <td>{k.emp_id}</td>
                <td>{k.emp_fullname}</td>
                <td>{k.emp_salary}</td>
                <td>{k.emp_department}</td>
                <td>{k.sisa_cuti}</td>
            </tr>
            )}
        </tbody>
        </table>
    </div>
  )
}

export default DapatData
