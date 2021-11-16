import UseApi from '../useApi/UseApi'
import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'

export const useWeather = (town: string): [string, boolean, (AxiosError | null)] =>  {
    const [city, setCity] = useState('')

    const [
        { data: getResult, loading: isLoading, error }
    ] = UseApi({
        method: 'GET',
        params: { q: town }
    })

    useEffect(() => {
        if (getResult && getResult.cod && getResult.cod === 200)
            setCity(getResult)
    }, [getResult, error])

    return [city, isLoading, error]
}
