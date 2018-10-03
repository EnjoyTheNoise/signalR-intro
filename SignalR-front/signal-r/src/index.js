import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import { signalRStart } from "./signalR/signalR";

let store = configureStore();

signalRStart(store, () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById("root")
  );
});
registerServiceWorker();
