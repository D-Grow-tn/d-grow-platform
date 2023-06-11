import React from "react";
import Router from "./router/Router"
import "./App.css";
import { store } from './store/index.js';
import { Provider } from 'react-redux';



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
