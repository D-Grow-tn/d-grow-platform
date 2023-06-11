import { Provider } from "react-redux";
import "./App.css";
import Router from "./router/Router";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./store/index.js";
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
