import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./App";

const rootElement = document.getElementById("root");

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
};

store.subscribe(render);

render();
