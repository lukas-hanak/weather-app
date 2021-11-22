import axios from 'axios'
import { config } from '../config/Config'

const api = axios.create({
    baseURL: config.weatherApiUrl,
    timeout: 0,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'X-Requested-With': '*',
        'Access-Control-Allow-Origin': '*'
    }
})

export default api
