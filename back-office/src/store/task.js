import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";

export const fetchTasks = createAsyncThunk("Tasks/Tasks",async () =>{
    const response = await axios.get(`${config.API_ENDPOINT}/tasks`);
    console.log('====================================');
    console.log(response.data);
    console.log('====================================');
    return response.data;

});

export const fetchTask = createAsyncThunk(
    "tasks/oneTask",
    async (id) => {
    const response = await axios.get(`${config.API_ENDPOINT}/tasks/${id}`);
    return response.data;
    }
  
);
export const createTask = createAsyncThunk(
   " tasks/createTasks",
   async (body,{dispatch}) => {
    const response = await axios.post(`${config.API_ENDPOINT}/tasks`, body);
    dispatch(fetchTasks(response.data));
    return response.data;


   }
);

export const removeTask = createAsyncThunk(
    "tasks/deleteTask",
    async (id, { dispatch }) => {
    //   console.log(id)
      const response = await axios.delete(
        `${config.API_ENDPOINT}/tasks/${id}`
      );
      dispatch(fetchTasks());
      return response.data;
    }
  );
  export const updateTask = createAsyncThunk(
    "tasks/updateTask",
    async (body) => {
      const {taskId,...rest} = body
    //   console.log(rest,'rest')
      const response = await axios.patch(
        `${config.API_ENDPOINT}/tasks/${taskId}`,
        {...rest}
      );
      
      return response.data;
    }
  );


  export const taskSlice = createSlice({
    name: "task",
    initialState:{
        task:null,
         tasks : {
        items:[],
    },
    error: null,
    deleteError: null,
    saveError: null,
    createProjectError: null,
    },
    reducers: {},

    extraReducers(builder){
        builder.addCase(fetchTasks.fulfilled, (state,action) => {
            state.tasks.items = action.payload;
        });
        builder.addCase(fetchTask.fulfilled, (state, action) => {
            state.task = action.payload;
          });
      
    }
    
  });
  export default taskSlice.reducer;