import React from "react";
import { Outlet, useParams } from "react-router-dom";

import "../styles/layout.scss";

export const Layout: React.FC = () => {
    const { username } = useParams();
    
    return (
        <div className="layout">
            {username &&
                <div className="nes-btn">{username}</div>
            }
            <div className="nes-container is-rounded">
                <Outlet/>
            </div>
            <button className="nes-btn is-rounded"></button>
        </div>
    );
};
