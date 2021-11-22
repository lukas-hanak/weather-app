import api from '../api'
import { makeUseAxios } from 'axios-hooks'

const useApi = makeUseAxios({
    axios: api,
    defaultOptions: { useCache: false }
})

export default useApi
