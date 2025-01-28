import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux-store/store'
import { Routes, Route } from 'react-router-dom'
import EmployeeAdd from './components/EmployeeAdd'
import EmployeeView from './components/EmployeeView'

const App = () => {
    return (
        <Provider store={store}>

            <h1 className='fs-3 text-center text-primary'>React Redux Storage</h1>

            <Routes>
                <Route path='/add/employee/' element={<EmployeeAdd />}/>
                <Route path='/' element={<EmployeeView />} />
            </Routes>
        </Provider>
    )
}

export default App