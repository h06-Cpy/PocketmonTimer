import React from "react";

export const Home: React.FC = () => {
    
    return (
        <div>
            <div className="nes-field">
                <label htmlFor="name_field">Your name</label>
                <input type="text" id="name_field" className="nes-input"/>
            </div>
        </div>
    );
};
