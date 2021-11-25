import axios from 'axios'
import { config } from '../config/config'

const api = axios.create({
    baseURL: config.weatherApiUrl,
    timeout: 0
})

export default api
