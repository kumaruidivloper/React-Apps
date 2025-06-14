import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App.jsx";
import reportWebVitals from './reportWebVitals.jsx';


//root is called form index.html root id HTML element here for virtual DOM//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* This App comp from App.jsx */}
        <App /> 
    </React.StrictMode>
);

reportWebVitals();