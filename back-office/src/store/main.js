import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios" 
import config from "../configs";


export const fetchMains = createAsyncThunk("mains/mains",async()=>{
    const response = await axios.get(`${config.API_ENDPOINT}/main-components`)
    return response.data
})

export const mainSlice = createSlice({
    name:"main",
    initialState:{
      main:null,
      mains:{
        items:[],
      },
      error:null,
      deleteError:null,
      saveError:null,
      createProjectError:null
    },
    reducers:{},

    extraReducers(builder){
      builder.addCase(fetchMains.fulfilled,(state,action)=>{
        state.mains.items = action.payload
      })
    }
})
export default mainSlice.reducer
