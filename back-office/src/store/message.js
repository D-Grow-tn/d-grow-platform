import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios" 
import config from "../configs";


export const fetchMessages = createAsyncThunk("messages/messages",async()=>{
    const response = await axios.get(`${config.API_ENDPOINT}/messages`)
    return response.data
})
export const fetchMessage = createAsyncThunk("messages/message",async(id)=>{
  const response = await axios.get(`${config.API_ENDPOINT}/messages/one/${id}`)
  return response.data
})
export const createMessage = createAsyncThunk("messages/message",async(body)=>{
    const response = await axios.post(`${config.API_ENDPOINT}/messages`,body)
    return response.data
})
export const removeMessage = createAsyncThunk("messages/removemessage",async(id,{dispatch})=>{
  const response = await axios.delete(`${config.API_ENDPOINT}/messages/${id}`)
  return response.data
})
export const updateMessage = createAsyncThunk("messages/updatemessage",async(body)=>{
  const {mainId,...rest} = body
  const response = await axios.patch(`${config.API_ENDPOINT}/messages/${mainId}`,{...rest})
  return response.data
})
export const messageSlice = createSlice({
    name:"message",
    initialState:{
      message:null,
      messages:{
        items:[],
      },
      error:null,
      deleteError:null,
      saveError:null,
      createProjectError:null
    },
    reducers:{},

    extraReducers(builder){
      builder.addCase(fetchMessages.fulfilled,(state,action)=>{
        state.messages.items = action.payload
      })
      builder.addCase(fetchMessage.fulfilled,(state,action)=>{
        state.message = action.payload
      })


    }
})
export default messageSlice.reducer
