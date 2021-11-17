import React from 'react'
import CityWeatherHeader from './header/CityWeatherHeader'
import CityWeatherDetail from './detail/CityWeatherDetail'

interface CityWeatherProps {
    city: string;
    country: string;
    onShowCitySelect: () => void;
}

const CityWeather: React.FC<CityWeatherProps> = ({ city, country, onShowCitySelect }) => {

    return (
        <div className='city-weather-container shadow text-center'>
            <CityWeatherHeader
                name={`${city}, ${country}`}
                onShowCitySelect={onShowCitySelect}
            />
            <CityWeatherDetail/>
        </div>
    )
}

export default CityWeather
