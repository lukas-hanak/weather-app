import api from '../Api'
import { makeUseAxios } from 'axios-hooks'

const UseApi = makeUseAxios({
    axios: api,
    defaultOptions: { useCache: false }
})

export default UseApi
