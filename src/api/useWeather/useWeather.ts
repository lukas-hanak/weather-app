import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import useApi from '../useApi/useApi'
import { CityWeatherInterface } from '../../interface/weatherInterface/weatherinterface'

export const useWeather = (lat: number, lon: number): [
    (CityWeatherInterface | null),
    boolean,
    (AxiosError | null),
    () => void
] => {
    const [cityWeather, setCityWeather] = useState<CityWeatherInterface | null>(null)

    const [
        { data: getResult, loading: getLoading, error: getError },
        getExecute
    ] = useApi({
        method: 'GET',
        params: {
            lat: lat ? lat : 0,
            lon: lon ? lon : 0
        }
    }, { manual: true })

    useEffect(() => {
        getResult && setCityWeather(getResult)
    }, [getResult])

    const onExecute = () => {
        getExecute({})
    }

    return [cityWeather, getLoading, getError, onExecute]
}
