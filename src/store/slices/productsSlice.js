import {createSlice} from '@reduxjs/toolkit'
import { fetchProducts } from '../thunks/fetchProducts'
import { getSingleUser } from '../thunks/singleUser'
const productSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        isLoading:false,
        error:{},
        singleProduct: {}
    },
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending,(state,action)=> {
            state.isLoading = true
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=> {
            state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.error
        })
        // Get Product
        builder.addCase(getSingleUser.pending,(state,action)=> {
            state.isLoading = true;
        })
        builder.addCase(getSingleUser.fulfilled,(state,action)=> {
            state.isLoading = false;
            state.singleProduct = action.payload
        })
        builder.addCase(getSingleUser.rejected,(state,action)=> {
            state.isLoading = false;
            state.error = action.error
        })
    }
})

export default productSlice.reducer