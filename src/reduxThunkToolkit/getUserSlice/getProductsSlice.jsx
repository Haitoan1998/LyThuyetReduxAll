import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=1`);
      // dispatch(someOtherAction())
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getProductID = createAsyncThunk(
  "products/getProductID",
  async (id) => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log(response);
    return response.data.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
      });
    builder
      .addCase(getProductID.pending, (state) => {
        state.isFetchProductID = true;
      })
      .addCase(getProductID.fulfilled, (state, { payload }) => {
        state.isFetchProductID = false;
        state.product = payload;
      })
      .addCase(getProductID.rejected, (state, action) => {
        state.isFetchProductID = false;
      });
  },
});

export default productSlice.reducer;
