import React, { useState } from 'react'
import './App.css'
import cityBackground from './assets/city-background.png'
import CityWeather from './components/cityWeather/CityWeather'
import SelectCity from './components/selectCity/SelectCity'
import { cities } from './config/Cities'
import { CityInterface } from './interface/city/CityInterface'

const App = () => {

    const [selectedCity, setSelectedCity] = useState(cities[0])
    const [showCityWeather, setShowCityWeather] = useState(true)

    const switchCityWeatherAndSelectCityScreen = () => {
        setShowCityWeather(val => !val)
    }

    const onSelectCity = (city: CityInterface) => {
        switchCityWeatherAndSelectCityScreen()
        setSelectedCity(city)
    }

    return (
        <div className='app'>
            <img src={cityBackground} className='img-fluid image-bg' alt='image-background' />
            {showCityWeather ? (
                <CityWeather
                    city={selectedCity}
                    onShowCitySelect={switchCityWeatherAndSelectCityScreen}
                />
            ) : (
                <SelectCity onSelectCity={onSelectCity} />
            )}
        </div>
    )
}

export default App
