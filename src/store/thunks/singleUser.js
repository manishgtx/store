import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const getSingleUser = createAsyncThunk('users/singleUser',async (user) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${user}`)
        return response.data
    } catch (error) {
        return error
    }
})

export {getSingleUser}