import { VITE_API_URL } from "../constants/enviroment";

async function fetchData(endpoint: string) {
    const response = await fetch(VITE_API_URL + endpoint, getHeadersWithNonce());
    const json = await response.json();
    if (response.ok) 
        return json;
    throw new Error(json);
}

function getHeadersWithNonce() {
    const nonce: string = (window as any).wp_data?.nonce || 'not defined';
    return {
        headers: {
            'X-WP-Nonce': nonce
        }
    }
}

export default fetchData;