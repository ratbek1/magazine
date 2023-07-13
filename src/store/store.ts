import todoSlice  from './reducers/todoSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  todoSlice
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]