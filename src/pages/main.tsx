import React from "react";
import { useParams } from "react-router-dom";

export const Main: React.FC = () => {
    const { username } = useParams();
    
    
    return (
        <div>this is main page. username: {username}</div>
    );
}
