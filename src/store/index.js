import { configureStore} from "@reduxjs/toolkit";
import productReducer from './slices/productsSlice'
import navReducer from './slices/navSlice'

export const store = configureStore({
    reducer:{
        navbar: navReducer,
        products: productReducer
    }
})


export * from './thunks/fetchProducts'
export * from './thunks/singleUser'
export * from './thunks/navCategories'