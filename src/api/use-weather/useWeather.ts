import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import useApi from '../use-api/useApi'
import { CityWeatherInterface } from '../../interface/weather-interface/Weatherinterface'

export const useWeather = (lat: number, lon: number): [(CityWeatherInterface | null), boolean, (AxiosError | null)] =>  {
    const [cityWeather, setCityWeather] = useState<CityWeatherInterface | null>(null)

    const [
        { data: getResult, loading: isLoading, error }
    ] = useApi({
        method: 'GET',
        params: { lat: lat ? lat : 0, lon: lon ? lon : 0 }
    })

    useEffect(() => {
        getResult && setCityWeather(getResult)
    }, [getResult])

    useEffect(() => {
        error && error.message && alert(error.message)
    },[error])

    return [cityWeather, isLoading, error]
}
