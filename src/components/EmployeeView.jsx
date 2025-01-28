import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateEmployee, deleteEmployee } from '../redux-store/slices/employeeSlice'
import { useNavigate } from 'react-router'

const EmployeeView = () => {

    const navigate = useNavigate()

    const employees = useSelector(state => state.employees)

    const employeeDispatch = useDispatch()

    const UpdateHandler = (event, index) => {

        employeeDispatch(updateEmployee({
            index: index,
            new_value: event.target.value
        }))
    }

    const DeleteHandler = index => employeeDispatch(deleteEmployee(index))

    let EmployeeList = employees.map((employee, index) => {
        return (
            <div key={index}>
                <input type="text" value={employee} onChange={event => UpdateHandler(event, index)}/>
                <button className='cancel' onClick={() => DeleteHandler(index)}>X</button>
            </div>
        )
    })

    return (
        <div className='container'>

            <h1 className='fs-5 text-center'>Employee List</h1>

            <button className='btn btn-primary float-end' onClick={() => navigate('/add/employee/')}>+Add Employee</button>

            <div className='clear-float text-center'>
                {EmployeeList}
            </div>

        </div>
    )
}

export default EmployeeView