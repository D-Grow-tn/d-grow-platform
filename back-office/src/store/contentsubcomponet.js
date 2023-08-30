import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios" 
import config from "../configs";



export const fetchContentSubComponets = createAsyncThunk("content-sub-components/content-sub-components",async(subComponetId)=>{
    const response = await axios.get(`${config.API_ENDPOINT}/content-sub-components/by-sub-component/${subComponetId}`)
    return response.data
})
export const fetchContentSubComponet = createAsyncThunk("content-sub-components/content-sub-component",async(id)=>{
  const response = await axios.get(`${config.API_ENDPOINT}/content-sub-components/one/${id}`)
  return response.data
})
export const createContentSubComponet = createAsyncThunk("content-sub-components/addcontent-sub-component",async(body)=>{
    const response = await axios.post(`${config.API_ENDPOINT}/content-sub-components`,body)
    return response.data
})
export const removeContentSubComponet = createAsyncThunk("mains/removecontent-sub-component",async(id)=>{
  const response = await axios.delete(`${config.API_ENDPOINT}/content-sub-components/${id}`)
  return response.data
})
export const updateContentSubComponet = createAsyncThunk("mains/updatecontent-sub-components",async(body)=>{
  const {contentsubcomponetId,...rest} = body
  const response = await axios.patch(`${config.API_ENDPOINT}/content-sub-components/${contentsubcomponetId}`,{...rest})
  return response.data
})
export const contentsubcomponetSlice = createSlice({
    name:"contentsubcomponet",
    initialState:{
        contentsubcomponet:null,
        contentsubcomponets:{
        items:[],
      },
      error:null,
      deleteError:null,
      saveError:null,
      createProjectError:null
    },
    reducers:{},

    extraReducers(builder){
      builder.addCase(fetchContentSubComponets.fulfilled,(state,action)=>{
        state.contentsubcomponets.items = action.payload
      })
      builder.addCase(fetchContentSubComponet.fulfilled,(state,action)=>{
        state.contentsubcomponet = action.payload
      })
      builder.addCase(updateContentSubComponet.fulfilled,(state,action)=>{
        state.contentsubcomponet = action.payload
      })

    }
})
export default contentsubcomponetSlice.reducer
