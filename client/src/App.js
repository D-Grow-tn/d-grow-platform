import { Provider } from "react-redux";
import Router from "./router/Router";
import { store } from "./store/index.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
