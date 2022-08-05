import React from "react";
import "../styles/main.scss";

export const Main: React.FC = () => {
    
    return (
        <div className="main">
            <div>
                <div className="nes-badge is-splited">
                    <span className="is-dark">Lv.2</span>
                    <span className="is-warning">Pikachu</span>
                </div>
            </div>
            <div className="ratio nes-container">
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
        </div>
    
    );
};
