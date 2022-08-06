import React, { useEffect, useState } from "react";
import "../styles/main.scss";
import { client, UserData } from "../api/client";
import { useParams } from "react-router-dom";
import classNames from "classnames";

export const Main: React.FC<{
    fetch: (username: string) => Promise<void>,
    data: UserData | null,
    invalidate: () => void,
}> = ({ fetch, data, invalidate }) => {
    const { username } = useParams();
    const [loading, setLoading] = useState(false);
    
    const create = () => {
        setLoading(true);
        client
            .post(`/users/${username}/create`)
            .then(() => {
                setLoading(false);
                invalidate();
            })
            .catch(() => setLoading(false));
    };
    
    useEffect(() => {
        username && fetch(username);
    }, [fetch]);
    
    return (
        <div className="main">
            {data ? data.current_pokemon
                ? <>
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
                        value={data.current_commits % 10}
                        max="10"
                    />
                    
                    <div className="desc">{10 - (data.current_commits % 10)} commits until next evolution...</div>
                </>
                : <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h3>Create Pokemon</h3>
                    <div className="poke-icon">
                        <i className="nes-icon nes-pokeball"/>
                    </div>
                    
                    <button
                        className={classNames(
                            "nes-btn", "is-warning",
                            { "is-disabled": loading },
                        )}
                        onClick={create}
                        style={{width: "100%"}}
                    >Create
                    </button>
                
                </div> : <div>Loading...</div>
            }
        </div>
    
    );
};
