import React from "react";
import { Outlet } from "react-router-dom";

import "../styles/layout.scss";

export const Layout: React.FC = () => {
    
    
    return (
        <div className="layout">
            <Outlet/>
        </div>
    );
}
