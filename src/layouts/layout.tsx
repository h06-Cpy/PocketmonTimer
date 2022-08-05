import React from "react";
import { Outlet, useParams } from "react-router-dom";

import "../styles/layout.scss";

export const Layout: React.FC = () => {
    const { username } = useParams();
    
    const [message, setMessage] = React.useState("");
    
    return (
        <div className="layout">
            {username &&
                <div className="header">
                    <div className="nes-btn username">{username}</div>
                    <div className="nes-btn is-warning icon">
                        <img src="/bag.png"/>
                    </div>
                </div>
            }
            <div className="nes-container is-rounded">
                <Outlet/>
            </div>
            
            <div className="buttons">
                <button
                    className="nes-btn is-warning is-rounded"
                    style={{ width: 35, height: 35 }}
                />
                <button
                    className="nes-btn"
                    onClick={() => setMessage(message + "a")}
                />
                <button
                    className="nes-btn"
                    style={{ marginRight: 50 }}
                />
                <button
                    className="nes-btn is-success display"
                    style={{ height: 30, flexGrow: 1, pointerEvents: "none" }}
                >{message}</button>
            </div>
        </div>
    );
};
