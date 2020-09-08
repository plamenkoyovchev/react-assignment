import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store/store";

import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
