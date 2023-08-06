import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk('products/fetch',async(category) => {
    let URL = ''
    if(category) {
        URL = `https://fakestoreapi.com/products/category/${category}`
    } else {
        URL = 'https://fakestoreapi.com/products'
    }
    try {
        const res = await axios.get(URL)
        return res.data
    } catch (error) {
        return error       
    }
})