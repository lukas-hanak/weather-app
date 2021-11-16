import React from 'react'
import cityBackground from './assets/city-background.png'
import './App.css'
import CityWeather from './components/city-weather/CityWeather'
import { useWeather } from './api/useWeather/useWeather'

const App = () => {

    const [city, isLoading, error] = useWeather('Bratislava')

    return (
        <div className='app'>
            <img src={cityBackground}  className='img-fluid' alt='' />
            <p>{city}</p>
            <CityWeather cityName='Bratislava' countryName='Slovakia' />
        </div>
    )
}

export default App
