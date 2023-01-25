import React, {useState} from 'react'
import DapatData from './datachild'

const KirimTabel = (props) => {
  
    const dataKaryawan=[{
        emp_id : 101,
        emp_fullname : "lex",
        emp_salary : 17000,
        emp_department : "IT",
        sisa_cuti : 5
    },
    {
        emp_id : 102,
        emp_fullname : "Alexander",
        emp_salary : 15000,
        emp_department : 'IT',
        sisa_cuti : 5
    },
    {
        emp_id : 103,
        emp_fullname : 'Bruce',
        emp_salary : 10000,
        emp_department : "Sales",
        sisa_cuti : 5
    },
    {
        emp_id : 104,
        emp_fullname : 'Charlie',
        emp_salary : 18000,
        emp_department : "Sales",
        sisa_cuti : 10
    },
    {
        emp_id : 105,
        emp_fullname : 'Delta',
        emp_salary : 19000,
        emp_department : "Purchasing",
        sisa_cuti : 5
    },
    {
        emp_id : 106,
        emp_fullname : 'Echo',
        emp_salary : 25000,
        emp_department : "Engineer",
        sisa_cuti : 10
    },
    {
        emp_id : 107,
        emp_fullname : 'Farid',
        emp_salary : 18000,
        emp_department : "Finance",
        sisa_cuti : 5
    },
    {
        emp_id : 108,
        emp_fullname : 'Galuh',
        emp_salary : 27000,
        emp_department : "Human Resource",
        sisa_cuti : 7
    },
    {
        emp_id : 109,
        emp_fullname : 'Haris',
        emp_salary : 35000,
        emp_department : "Finance",
        sisa_cuti : 10
    },
    {
        emp_id : 110,
        emp_fullname : 'Maria',
        emp_salary : 10000,
        emp_department : "IT",
        sisa_cuti : 100
    }
    ]
    const [data] = useState(dataKaryawan)
    return (
    <div>
        <DapatData
        data = {data}/>
    </div>
  )
}

export default KirimTabel



