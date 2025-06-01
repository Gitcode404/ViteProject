// resources/js/app.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Register from "./components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import "../css/app.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/register" element={<Register />} /> */}
            </Routes>
        </BrowserRouter>
        // <Login />
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
