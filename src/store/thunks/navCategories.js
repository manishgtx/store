import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const navCategories = createAsyncThunk('nav/fetchCategories',async() => {
    try {
        const res = await axios.get('https://fakestoreapi.com/products/categories')
        return res.data
    } catch (error) {
        return error       
    }
})