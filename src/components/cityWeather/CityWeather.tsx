import React, { useEffect } from 'react'
import CityWeatherHeader from './header/CityWeatherHeader'
import CityWeatherDetail from './detail/CityWeatherDetail'
import { CityInterface } from '../../interface/city/CityInterface'
import { useWeather } from '../../api/useWeather/useWeather'

interface CityWeatherProps {
    city: CityInterface
    onShowCitySelect?: () => void
}

const CityWeather: React.FC<CityWeatherProps> = ({ city, onShowCitySelect }) => {

    const [cityWeather, isCityWeatherLoading, cityWeatherError, executeCityWeather] = useWeather(city.lat, city.lon)

    // INFO:
    // When load the component, we fetch all the weather data in that location
    // For this action we are using hook useWeather
    useEffect(() => {
        executeCityWeather()
    }, [])

    if (!cityWeather || isCityWeatherLoading)
        return (
            <div className='loading-container'>
                <div className='spinner-border text-primary' role='status'/>
            </div>
        )

    return (
        <div className='city-weather-container shadow text-center'>
            {!cityWeatherError ? (
                <>
                    <CityWeatherHeader
                        name={`${city.name}, ${city.country}`}
                        onShowCitySelect={onShowCitySelect}
                    />
                    <CityWeatherDetail cityWeather={cityWeather}/>
                </>
            ) : cityWeatherError.message  && (
                <p className='text-danger'>{cityWeatherError.message}</p>
            )}
        </div>
    )
}

export default CityWeather
