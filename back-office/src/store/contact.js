import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios" 
import config from "../configs";


export const fetchContacts = createAsyncThunk("contact/contacts",async()=>{
    const response = await axios.get(`${config.API_ENDPOINT}/contact`)
    return response.data
})
export const fetchContact = createAsyncThunk("contact/contact",async(id)=>{
  const response = await axios.get(`${config.API_ENDPOINT}/contact/${id}`)
  return response.data
})
export const createContact = createAsyncThunk("contact/createContact",async(body)=>{
    const response = await axios.post(`${config.API_ENDPOINT}/contact`,body)
    return response.data
})
export const removeContact= createAsyncThunk("contact/removeContact",async(id)=>{
  const response = await axios.delete(`${config.API_ENDPOINT}/contact/${id}`)
  return response.data
})
export const updateContact= createAsyncThunk("contact/upadateContact",async(body)=>{
  const {contactId,...rest} = body
  const response = await axios.patch(`${config.API_ENDPOINT}/contact/${contactId}`,{...rest})
  return response.data
})
export const contentSlice = createSlice({
    name:"contact",
    initialState:{
        contact:null,
        contacts:{
        items:[],
      },
      error:null,
      deleteError:null,
      saveError:null,
      createProjectError:null
    },
    reducers:{},

    extraReducers(builder){
      builder.addCase(fetchContacts.fulfilled,(state,action)=>{
        state.contacts.items = action.payload
      })
      builder.addCase(fetchContact.fulfilled,(state,action)=>{
        state.contact = action.payload
      })
    //   builder.addCase(updateContentSubComponet.fulfilled,(state,action)=>{
    //     state.contentsubcomponet = action.payload
    //   })

    }
})
export default contentSlice.reducer
