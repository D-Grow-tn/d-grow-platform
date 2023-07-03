import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios" 
import config from "../configs";


export const fetchSubComponets = createAsyncThunk("SubComponets/SubComponets",async()=>{
    const response = await axios.get(`${config.API_ENDPOINT}/sub-components`)
    return response.data
})
export const fetchSubComponet = createAsyncThunk("SubComponets/SubComponet",async(id)=>{
  const response = await axios.get(`${config.API_ENDPOINT}/sub-components/${id}`)
  return response.data
})
export const createSubComponet = createAsyncThunk("SubComponets/addSubComponet",async(body)=>{
    const response = await axios.post(`${config.API_ENDPOINT}/sub-components`,body)
    return response.data
})
export const removeSubComponet = createAsyncThunk("mains/removeSubComponet",async(id)=>{
  const response = await axios.delete(`${config.API_ENDPOINT}/sub-components/${id}`)
  return response.data
})
export const updateSubComponet = createAsyncThunk("mains/updateSubComponet",async(body)=>{
  const {subcomponetId,...rest} = body
  const response = await axios.patch(`${config.API_ENDPOINT}/sub-components/${subcomponetId}`,{...rest})
  return response.data
})
export const subcomponetSlice = createSlice({
    name:"subComponet",
    initialState:{
        subcomponet:null,
        subcomponets:{
        items:[],
      },
      error:null,
      deleteError:null,
      saveError:null,
      createProjectError:null
    },
    reducers:{},

    extraReducers(builder){
      builder.addCase(fetchSubComponets.fulfilled,(state,action)=>{
        state.subcomponets.items = action.payload
      })
      builder.addCase(fetchSubComponet.fulfilled,(state,action)=>{
        state.subcomponet = action.payload
      })
      builder.addCase(updateSubComponet.fulfilled,(state,action)=>{
        state.subcomponet = action.payload
      })

    }
})
export default subcomponetSlice.reducer
