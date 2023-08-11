import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios" 
import config from "../configs";


export const fetchContracts = createAsyncThunk("contract/contracts",async()=>{
    const response = await axios.get(`${config.API_ENDPOINT}/contract`)
    return response.data
})
export const fetchContract = createAsyncThunk("ontract/contract",async(id)=>{
  const response = await axios.get(`${config.API_ENDPOINT}/contract/${id}`)
  console.log(response.data,"-------")
  return response.data
})
export const createContract = createAsyncThunk("contract/createContract",async(body)=>{
    const response = await axios.post(`${config.API_ENDPOINT}/contract`,body)
    return response.data
})
export const removeContract= createAsyncThunk("contract/removeContract",async(id)=>{
  const response = await axios.delete(`${config.API_ENDPOINT}/contract/${id}`)
  return response.data
})
export const updateContract= createAsyncThunk("contract/upadateContract",async(body)=>{
  const {contractId,...rest} = body
  const response = await axios.patch(`${config.API_ENDPOINT}/contract/${contractId}`,{...rest})
  return response.data
})
export const contractSlice = createSlice({
    name:"contarct",
    initialState:{
        contract:null,
        contracts:{
        items:[],
      },
      error:null,
      deleteError:null,
      saveError:null,
      createProjectError:null
    },
    reducers:{},

    extraReducers(builder){
      builder.addCase(fetchContracts.fulfilled,(state,action)=>{
        state.contracts.items = action.payload
      })
      builder.addCase(fetchContract.fulfilled,(state,action)=>{
        state.contract = action.payload
      })

    }
})
export default contractSlice.reducer
