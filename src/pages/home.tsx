import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const [username, setUsername] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="nes-input"
        placeholder="username"
        onChange={handleInput}
      />
      <Link to={username}>
        <button type="button" className="nes-btn is-warning">
          Start
        </button>
      </Link>
    </div>
  );
};
