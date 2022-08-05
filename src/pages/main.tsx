import React from "react";
import "../styles/main.scss";

import { useParams } from "react-router-dom";

export const Main: React.FC = () => {
    const { username } = useParams();
    
    return (
        <div className="main">
            {/*<h2>SnowSuno</h2>*/}
            
            <div className="nes-badge is-splited">
                <span className="is-dark">Lv.2</span>
                <span className="is-warning">Pikachu</span>
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
            
            {/*<button className="nes-btn is-warning">My collections</button>*/}
        </div>
    
    );
};
