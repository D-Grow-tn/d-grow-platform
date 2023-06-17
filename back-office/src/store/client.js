import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../configs";
console.log(config);

export const fetchClients= createAsyncThunk("clients/clients", async () => {
    const response = await axios.get(`${config.API_ENDPOINT}/clients`);
    console.log("from the store",response.data);
    return response.data;
  });

  export const fetchClient = createAsyncThunk("clients/client", async (id) => {
    const response = await axios.get(`http://localhost:3001/api/v1/clients/${id}`);
    return response.data;
  });

  export const UpdateClient = createAsyncThunk("clients/Update", async (form) => {
    const { clientId, name, address, phone, email } = form;
    await axios.patch(`http://localhost:3001/api/v1/clients/${clientId}`, {
      name,
      address,
      phone,
      email
    });
  
    const updatedClientResponse = await axios.get(
      `http://localhost:3001/api/v1/clients/${clientId}`
    );
  console.log("cccccc",updatedClientResponse.data);
    return updatedClientResponse.data;

  });
  // export const UpdateClient = createAsyncThunk("clients/Update", async (form) => {
  //   const { clientId, name, address, phone,email } = form;
  //   const response = await axios.patch(`http://localhost:3001/api/v1/clients/${clientId}`,
  //     { name: name, address: address, phone: phone, email:email }
  //   );
  //   return response.data;
  // });
  
  // export const updateClient = createAsyncThunk("clients/updateClient", async (id) => {
  //   const response = await axios.patch(`http://localhost:3001/api/v1/clients/${id}`);
  //   return response.data;
  // });

  // export const removeClient = createAsyncThunk("clients/deleteClient", async (id, { dispatch }) => {
  //   let token = JSON.parse(localStorage.getItem('tokenAdmin'))
  //   const configs = {
  //     headers: {
  //       Authorization: 'Bearer ' + token.Authorization
  //     }
  //   }
  //   const response = await axios.delete(`${config.API_ENDPOINT}/clients/${id}`, configs);
  //   dispatch(fetchClients())
  //   return response.data;
  // })

// export const fetchProject = createAsyncThunk("projects/oneProject", async (id) => {
//   const response = await axios.get(`${config.API_ENDPOINT}/projects/${id}`);
//   console.log("res",response.data);
//   return response.data;
// });
// export const fetchProjectbyClient = createAsyncThunk("projects/project", async (id) => {
//   const response = await axios.get(`${config.API_ENDPOINT}/projects/by_client/${id}`);
//   console.log("proj",response.data);
//   return response.data;
  
//   });

export const removeClient = createAsyncThunk("clients/remove", async (clientId) => {
  await axios.delete(`http://localhost:3001/api/v1/clients/${clientId}`);
  return clientId;
});

  export const clientSlice= createSlice({
    name: "client",
    initialState: {
      client:null,
      clients: {
        items: [],
       
      },
      error: null,
      deleteError: null,
      saveError: null,
      createProjectError: null,
    },
 
    reducers: {},

    extraReducers(builder) {
     
      builder.addCase(fetchClients.fulfilled, (state, action) => {
        state.clients.items = action.payload;
      
      });

      builder.addCase(removeClient.fulfilled, (state, action) => {
        const clientId = action.payload;
        state.clients.items = state.clients.items.filter(client => client.clientId !== clientId);
      });
      
      builder.addCase(fetchClient.fulfilled, (state, action) => {
        state.client = action.payload;
      });


      builder.addCase(UpdateClient.fulfilled, (state, action) => {
        state.client = action.payload;
      });

    },
  });
  export default clientSlice.reducer;
