import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import { store } from "./redux";
import { persistor } from "./redux";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
