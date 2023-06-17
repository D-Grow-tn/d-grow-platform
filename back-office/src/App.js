import React from "react";
import Router from "./router/Router"
import "./App.css";
import { store } from './store/index.js';
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <Provider store={store}>
    <div>
      <Router />
      <ToastContainer />
    </div>
    </Provider>
  );
}

export default App;
