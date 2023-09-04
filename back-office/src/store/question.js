import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios" 
import config from "../configs";


export const fetchQuestions = createAsyncThunk("questions/questions",async(id)=>{
    const response = await axios.get(`${config.API_ENDPOINT}/questions`)
console.log("question from store",response.data);
    return response.data
})
export const fetchQuestion = createAsyncThunk("questions/question",async(id)=>{
  const response = await axios.get(`${config.API_ENDPOINT}/questions/${id}`)
  console.log("🚀 ~ file: question.js:9 ~ fetchQuestions ~ response:", response)
  return response.data
})
export const createQuestion = createAsyncThunk("questions/question",async(body)=>{
    console.log(body)
    const response = await axios.post(`${config.API_ENDPOINT}/questions`,body)
    return response.data
})
export const removeQuestion= createAsyncThunk("question/question",async(id)=>{
  const response = await axios.delete(`${config.API_ENDPOINT}/questions/${id}`)
  return response.data
})
export const updataQuestion = createAsyncThunk("questions/question",async(body)=>{
  const {questionId,...rest} = body
  const response = await axios.patch(`${config.API_ENDPOINT}/questions/${questionId}`,{...rest})
  return response.data
})
export const questionSlice = createSlice({
    name:"question",
    initialState:{
        question:null,
        questions:{
        items:[],
      },
      error:null,
      deleteError:null,
      saveError:null,
      createQuestionError:null
    },
    reducers:{},

    extraReducers(builder){
      builder.addCase(fetchQuestions.fulfilled,(state,action)=>{
        state.questions.items = action.payload
      })
      builder.addCase(fetchQuestion.fulfilled,(state,action)=>{
        state.question = action.payload
      })


    }
})
export default questionSlice.reducer
