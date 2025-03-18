import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { apiClient } from "../../axios/apiClient";

'https://dummyjson.com/products/search?q=phone'
export const getProducts = createAsyncThunk(
    "products/get",
    async (category, thunkAPI) => {
        try {
            const res = await apiClient.get(`/products/${category}`)
            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message || "not found")
        }
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase()
            .addCase()
            .addCase()
    }
})