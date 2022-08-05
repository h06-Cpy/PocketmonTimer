import React from "react";
import { Outlet } from "react-router-dom";

import "../assets/layout.scss";

export const Layout: React.FC = () => {
    
    
    return (
        <div className="layout">
            <h1>Hello world!</h1>
            <Outlet/>
        </div>
    );
}
