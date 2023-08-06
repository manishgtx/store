import { configureStore,createSlice } from "@reduxjs/toolkit";
import productReducer from './slices/productsSlice'
const navSlice = createSlice({
    name:'navbar',
    initialState:{isOpen:false},
    reducers:{
        open(state){
            state.isOpen = true
        },
        close(state){
            state.isOpen = false
        }
    }
})

const store = configureStore({
    reducer:{
        navbar: navSlice.reducer,
        products: productReducer
    }
})

export {store}
export const {open,close} = navSlice.actions

export * from './thunks/fetchProducts'
export * from './thunks/singleUser'