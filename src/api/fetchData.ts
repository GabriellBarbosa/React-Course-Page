import { VITE_API_URL } from "../constants/enviroment";

async function fetchData(endpoint: string) {
    const response = await fetch(VITE_API_URL + endpoint);
    const json = await response.json();
    if (response.ok) 
        return json;
    throw new Error(json);
}

export default fetchData;