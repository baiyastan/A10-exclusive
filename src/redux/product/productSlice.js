import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";

export const getProducts = createAsyncThunk(
    "products/get",
    async (category, thunkAPI) => {
        try {
            let url = "/products"

            const res = await apiClient.get(url);
            return res.data.products;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        error: null,
        products: [],
        category: ""
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { setCategory } = productsSlice.actions
export default productsSlice.reducer;