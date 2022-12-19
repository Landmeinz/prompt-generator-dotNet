import axios from "axios";

export const BASE_URL = 'https://localhost:7058';

export const ENDPOINTS = {
    weatherforecast: 'WeatherForecast',
    keyword: 'keyword'
}

export const createApiEndpoint = (endpoint) => {
    let url = `${BASE_URL}/api/${endpoint}`;

    return {
        fetch: () => axios.get(url),
    }
}

