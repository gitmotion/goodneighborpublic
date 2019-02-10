import axios from 'axios';

export const FETCH_SOMETHING= 'FETCH_SOMETHING';
const ROOT_URL = 'https://jsonplaceholder.typicode.com/posts/';

export function fetchWeather() {

    const url = `${ROOT_URL}`;
    const request = axios.get(url);
    console.log(request);

    return {
        type: FETCH_SOMETHING,
        payload: request
    };
}
