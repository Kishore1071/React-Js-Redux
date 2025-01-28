import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const employeeSlice = createSlice({

    name: 'employee_data',
    initialState,

    reducers: {

        newEmployee(state, action){

            state.push(action.payload)
            return state
        },

        updateEmployee: function (state, action) {
            
            const update_data = action.payload
            state[update_data['index']] = update_data['new_value']
            return state
        },

        deleteEmployee: function (state, action) {
            const selected_index = action.payload
            state.splice(selected_index, 1)
            return state
        }

    }
})

export const { newEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions
export default employeeSlice.reducer