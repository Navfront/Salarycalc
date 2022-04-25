import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import IndexPage from "./components/pages/index/indexPage";
import { createStore } from "redux";

function counterReducer(state = { value: 5 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 10 };
    case "counter/decremented":
      return { value: state.value - 10 };
    default:
      return state;
  }
}

const store = createStore(
  counterReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IndexPage store={store} />
  </React.StrictMode>
);

reportWebVitals();
