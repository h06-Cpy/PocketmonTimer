import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";

import "./index.css";

import { Home } from "./pages/home";
import { Main } from "./pages/main";
import { Layout } from "./layouts/layout";

import "./index.css";
import { client, UserData } from "./api/client";

function App() {
    const [username, setUsername] = React.useState("");
    const [userData, setUserData] = React.useState<UserData | null>(null);
    
    const fetch = async (username: string): Promise<void> => {
        if (userData) return;
        const res = await client.get<UserData>(`/users/${username}`)
        setUserData(res.data);
    }
    
    const invalidate = () => {
        setUserData(null);
    }
    
    useEffect(() => {
        username && fetch(username);
    }, [fetch, username, userData]);
    
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home
                    fetch={fetch}
                />}/>
                <Route path=":username" element={<Main
                    fetch={fetch}
                    data={userData}
                    invalidate={invalidate}
                />}/>
            </Route>
        </Routes>
    );
}

export default App;
