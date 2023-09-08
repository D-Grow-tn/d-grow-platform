import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios" 
import config from "../configs";


export const fetchQuizs = createAsyncThunk("quizs/quizs",async(id)=>{
    const response = await axios.get(`${config.API_ENDPOINT}/quizs`)
console.log("quiz from store",response.data);
    return response.data
})
export const fetchQuiz = createAsyncThunk("quizs/quiz",async(id)=>{
  const response = await axios.get(`${config.API_ENDPOINT}/quizs/${id}`)
  console.log("🚀 quiz response:", response)
  return response.data
})
export const createQuiz = createAsyncThunk("quizs/quiz",async(body)=>{
    console.log(body)
    const response = await axios.post(`${config.API_ENDPOINT}/quizs`,body)
    return response.data
})
export const removeQuiz = createAsyncThunk("quiz/quiz",async(id)=>{
  const response = await axios.delete(`${config.API_ENDPOINT}/quizs/${id}`)
  return response.data
})
export const updataQuiz = createAsyncThunk("quizs/quiz",async(body)=>{
  const {quizId,...rest} = body
  const response = await axios.patch(`${config.API_ENDPOINT}/quizs/${quizId}`,{...rest})
  return response.data
})
export const quizSlice = createSlice({
    name:"quiz",
    initialState:{
      quiz:null,
      quizes:{
        items:[],
      },
      error:null,
      deleteError:null,
      saveError:null,
      createProjectError:null
    },
    reducers:{},

    extraReducers(builder){
      builder.addCase(fetchQuizs.fulfilled,(state,action)=>{
        state.quizes.items = action.payload
      })
      builder.addCase(fetchQuiz.fulfilled,(state,action)=>{
        state.quiz = action.payload
      })


    }
})
export default quizSlice.reducer
