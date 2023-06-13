import React from "react";
import Router from "./router/Router"
import "./App.css";
import { store } from './store/index.js';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Provider store={store}>
    <div>
      <Router />
    </div>
    </Provider>
  );
}

export default App;
