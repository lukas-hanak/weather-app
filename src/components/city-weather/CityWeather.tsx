import React from 'react'
import CityWeatherHeader from './header/CityWeatherHeader'
import CityWeatherDetail from './detail/CityWeatherDetail'

interface CityWeatherProps {
    cityName: string;
    countryName: string;
}

const CityWeather: React.FC<CityWeatherProps> = ({ cityName, countryName }) => {

    return (
        <div className='city-weather-container shadow'>
            <CityWeatherHeader name={`${cityName}, ${countryName}`} />
            <CityWeatherDetail/>
        </div>
    )
}

export default CityWeather
