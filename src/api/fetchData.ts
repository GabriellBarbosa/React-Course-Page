import { VITE_API_URL } from "../constants/enviroment";

async function fetchData(endpoint: string) {
    const response = await fetch(VITE_API_URL + endpoint, getHeadersWithNonce());
    const json = await response.json();
    if (response.ok) 
        return json;
    throw new Error(json);
}

async function postData(endpoint: string) {
    const response = await fetch(VITE_API_URL + endpoint, {
        ...getHeadersWithNonce(), method: 'POST'
    });
    const json = await response.json();
    if (response.ok) 
        return json;
    throw new Error(json);
}

function getHeadersWithNonce() {
    const nonce: string = (window as any).wp_data?.nonce || 'not defined';
    if (import.meta.env.MODE == 'development')
        return {};
    else
        return {headers: { 'X-WP-Nonce': nonce }}
}

export { fetchData, postData };