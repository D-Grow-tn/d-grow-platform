import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";


export const fetchProduct = createAsyncThunk("products/products", async () => {
  const response = await axios.get(`${config.API_ENDPOINT}/products`);
  console.log("res",response.data);
  return response.data;
});

export const fetchProducType = createAsyncThunk("products/productype", async () => {
    const response = await axios.get(`${config.API_ENDPOINT}/producttype`);
    console.log("ressssssss",response.data);
    return response.data;
  });
  

  export const fetchOneProduct = createAsyncThunk("products/oneProduct", async (id) => {
    const response = await axios.get(`${config.API_ENDPOINT}/producttype/${id}`);
    console.log("ressssssssoooooooooooooop",response.data);
    return response.data;
  });
  

  export const productSlice= createSlice({
    name: "product",
    initialState: {
      product:null,
       products: {
        items: [],
        
      },
      productTypes: { 
            items: [],
          },
      error: null,
      deleteError: null,
      saveError: null,
      createProjectError: null,
    },

    reducers: {},

    extraReducers(builder) {
       
        builder.addCase(fetchOneProduct.fulfilled, (state, action) => {
            state.product = action.payload;
          });

      builder.addCase(fetchProduct.fulfilled, (state, action) => {
        state.products.items = action.payload;
      });
      
      builder.addCase(fetchProducType.fulfilled, (state, action) => {
        state.productTypes.items = action.payload;
      });
    },
  });
  export default productSlice.reducer;