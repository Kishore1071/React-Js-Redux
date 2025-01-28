import React, { useState } from 'react'
import { newEmployee } from '../redux-store/slices/employeeSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

const EmployeeAdd = () => {

    const navigate = useNavigate()

    const [employee, setEmployee] = useState('')
    const employeeDispatch = useDispatch()

    const AddEmployee = () => {
        employeeDispatch(newEmployee(employee))
        setEmployee('')
    }

    return (
        <div className='container'>

            <h1 className='fs-5 text-center'>Employees</h1>

            <button className='btn btn-secondary float-end' onClick={() => navigate('/')}>Back</button>

            <div className='clear-float text-center'>

                <input type="text" value={employee} onChange={event => setEmployee(event.target.value)}/>
                <button className='cancel bg-primary' onClick={AddEmployee}>Add</button>

            </div>
        </div>
    )
}

export default EmployeeAdd