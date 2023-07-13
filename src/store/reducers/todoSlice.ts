import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const todo: any = localStorage.getItem("task")


interface ITodoState {
    todo: any[]
}
const initialState: ITodoState = {
    todo: JSON.parse(todo) || []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers : {
        addTodo(state, action: PayloadAction<any>){
           localStorage.setItem("task", JSON.stringify( state.todo = [{...action.payload}, ...state.todo]))
        }
    }
})
export default todoSlice.reducer
export const {addTodo} = todoSlice.actions