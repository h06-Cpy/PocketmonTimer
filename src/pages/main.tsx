import React from "react";
import "../styles/main.scss";

import { useParams } from "react-router-dom";

export const Main: React.FC = () => {
    const { username } = useParams();
    
    return (
        <div className="main nes-container">
            <h2>SnowSuno</h2>
            
            <h4 style={{ width: "100%" }}>Pikachu</h4>
            <div className="ratio">
                <div className="nes-container is-dark">
                    <img
                        src="https://i.some-random-api.ml/pokemon/pikachu.gif"
                        alt=""
                    />
                </div>
            </div>
            
            <progress
                className="nes-progress is-success"
                value="60"
                max="100"
            />
            
            <div className="desc">5 commits until next evolution...</div>
            
            <button className="nes-btn is-warning">My collections</button>
        </div>
    
    );
};
