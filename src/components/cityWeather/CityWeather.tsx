import React from 'react'
import CityWeatherHeader from './header/CityWeatherHeader'
import CityWeatherDetail from './detail/CityWeatherDetail'
import { CityInterface, Country } from '../../interface/city/CityInterface'
import { useWeather } from '../../api/use-weather/useWeather'

interface CityWeatherProps {
    selectedCity: CityInterface
    country: Country
    onShowCitySelect: () => void
}

const CityWeather: React.FC<CityWeatherProps> = ({ selectedCity, country, onShowCitySelect }) => {

    const [cityWeather, isCityLoading, cityError] = useWeather(selectedCity.lat, selectedCity.lon)

    if (!cityWeather || isCityLoading || cityError) {
        return (
            <div className='loading-container'>
                <div className='spinner-border text-primary' role='status'/>
            </div>
        )
    }

    return (
        <div className='city-weather-container shadow text-center'>
            <CityWeatherHeader
                name={`${selectedCity.name}, ${selectedCity.country}`}
                onShowCitySelect={onShowCitySelect}
            />
            <CityWeatherDetail cityWeather={cityWeather} />
        </div>
    )
}

export default CityWeather
