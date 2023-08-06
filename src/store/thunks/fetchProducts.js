import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk('products/fetch',async() => {
    try {
        const res = await axios.get('https://fakestoreapi.com/products')
        return res.data
    } catch (error) {
        return error       
    }
})