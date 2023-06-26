import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios" 
import config from "../configs";


export const fetchMains = createAsyncThunk("mains/mains",async()=>{
    const response = await axios.get(`${config.API_ENDPOINT}/main-components`)
    return response.data
})
export const createMain = createAsyncThunk("mains/main",async(body)=>{
    const response = await axios.post(`${config.API_ENDPOINT}/main-components`,body)
    return response.data
})
export const removeMain = createAsyncThunk("mains/removemain",async(id,{dispatch})=>{
  const response = await axios.delete(`${config.API_ENDPOINT}/main-components/${id}`)
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
      // builder.addCase(createMain.fulfilled,(state,action)=>{
      //   state.mains.items = action.payload
      // })
    }
})
export default mainSlice.reducer
