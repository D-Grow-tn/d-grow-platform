import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios" 
import config from "../configs";


export const fetchDevises = createAsyncThunk("devis/devises",async()=>{
    const response = await axios.get(`${config.API_ENDPOINT}/devis`)
    return response.data
})
export const fetchDevis = createAsyncThunk("devis/devis",async(id)=>{
  const response = await axios.get(`${config.API_ENDPOINT}/devis/${id}`)
  console.log(response.data,"-------")
  return response.data
})
export const createDevis = createAsyncThunk("devis/createDevis",async(body)=>{
  console.log(body)
    const response = await axios.post(`${config.API_ENDPOINT}/devis`,body)
    return response.data
})
export const removeDevis= createAsyncThunk("devis/removeDevis",async(id)=>{
  const response = await axios.delete(`${config.API_ENDPOINT}/devis/${id}`)
  return response.data
})
export const updateDevis= createAsyncThunk("devis/upadateDevis",async(body)=>{
  const {quotationId,...rest} = body
  const response = await axios.patch(`${config.API_ENDPOINT}/devis/${quotationId}`,{...rest})
  return response.data
})
export const devisSlice = createSlice({
    name:"devis",
    initialState:{
        devis:null,
        devises:{
        items:[],
      },
      error:null,
      deleteError:null,
      saveError:null,
      createProjectError:null
    },
    reducers:{},

    extraReducers(builder){
      builder.addCase(fetchDevises.fulfilled,(state,action)=>{
        state.devises.items = action.payload
      })
      builder.addCase(fetchDevis.fulfilled,(state,action)=>{
        state.devis = action.payload
      })

    }
})
export default devisSlice.reducer
