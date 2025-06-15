import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App.jsx";
import reportWebVitals from './reportWebVitals.jsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';


//root is called form index.html root id HTML element here for virtual DOM//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();