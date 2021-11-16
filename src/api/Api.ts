import axios from 'axios'
import { config } from '../config/Config'

const api = axios.create({
    baseURL: config.weatherApiUrl,
    timeout: 0,
    headers: {
        'Accept-Encoding': 'identity',
        'Access-Control-Allow-Origin': '*',
        'withCredentials': 'true',
        'App-Language': 'CZ'
    }
})

export default api
