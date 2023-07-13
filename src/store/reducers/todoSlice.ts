import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface ITodoState {
    todo: any[]
}
const initialState: ITodoState = {
    todo: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {
        addTodo(state, action: PayloadAction<any>){
            state.todo = [{...action.payload}, ...state.todo]
        }
    }
})
export default todoSlice.reducer
export const {addTodo} = todoSlice.actions