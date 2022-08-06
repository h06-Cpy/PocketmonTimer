import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import classNames from "classnames";
import "../styles/home.scss";
import { client, UserData } from "../api/client";



export const Home: React.FC<{
    fetch: (username: string) => Promise<void>
}> = ({fetch}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [state, setState] = useState<"normal" | "loading" | "error">("normal");
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };
    
    const onClick = () => {
        setState("loading");
        fetch(username)
            .then(() =>  navigate(username))
            .catch(() => setState("error"));
    };
    
    return (
        <div className="home">
            <div className="poke-icon">
                <i className="nes-icon nes-pokeball"/>
            </div>
            <h1>CommitMon</h1>
            <div className="form-wrapper">
                <input
                    type="text"
                    className={classNames(
                        "nes-input",
                        { "is-error": state === "error" },
                    )}
                    placeholder="username"
                    onChange={handleInput}
                />
                <button
                    className={classNames(
                        "nes-btn", "is-warning",
                        { "is-disabled": state === "loading" },
                    )}
                    onClick={onClick}
                >
                    {state !== "loading" ? "Start" : "Loading..."}
                </button>
            </div>
        </div>
    );
};
