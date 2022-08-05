import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Main } from "./pages/main";
import { Layout } from "./layouts/layout";

import "./index.css";

function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path=":username" element={<Main/>}/>
            </Route>
        </Routes>
    );
}

export default App;
