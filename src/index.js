import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./component/Redux/Store";

import 'react-toastify/dist/ReactToastify.css';
// import 'jalali-react-datepicker/dist/types';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
