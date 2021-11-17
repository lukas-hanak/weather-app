import axios from 'axios'
import { config } from '../config/Config'

const api = axios.create({
    baseURL: config.weatherApiUrl,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'mode': 'no-cors'
    }
})

export default api
