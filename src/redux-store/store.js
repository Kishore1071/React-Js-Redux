import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./slices/employeeSlice";

export const store = configureStore({
    devTools: true,
    reducer: {
        employees: employeeReducer,
    }
})