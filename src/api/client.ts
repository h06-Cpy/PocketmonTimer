import axios from "axios";

export const client = axios.create({
    // baseURL: "https://pokemon-backend.onrender.com/api"
    baseURL: "http://snowsuno.local:8000/api"
});


export interface UserData {
    id: number;
    username: string;
    commits: number;
    current_pokemon: string | null;
    current_commits: number;
    pokedex: string[];
}

