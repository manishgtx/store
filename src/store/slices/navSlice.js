import { createSlice } from "@reduxjs/toolkit"
import { navCategories } from "../thunks/navCategories"
const navSlice = createSlice({
    name:'navbar',
    initialState:{isOpen:false,categories:[]},
    reducers:{
        open(state){
            state.isOpen = true
        },
        close(state){
            state.isOpen = false
        }
    },
    extraReducers(builder){
        builder.addCase(navCategories.pending,(state,action)=> {

        })
        builder.addCase(navCategories.fulfilled,(state,action)=> {
            state.categories = action.payload
        })
        builder.addCase(navCategories.rejected,(state,action)=> {
            
        })
    }
})

export default navSlice.reducer
export const {open,close} = navSlice.actions
