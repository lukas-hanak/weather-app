import React, { useState } from 'react'
import './App.css'
import cityBackground from './assets/city-background.png'
import CityWeather from './components/cityWeather/CityWeather'
import SelectCity from './components/selectCity/SelectCity'
import { cities } from './config/Cities'
import { CityInterface } from './interface/city/CityInterface'

const App = () => {

    const country = 'Slovakia'
    const [selectedCity, setSelectedCity] = useState(cities[0])
    const [showCityWeather, setShowCityWeather] = useState(true)

    const switchCityWeatherAndSelectCityScreen = () => {
        setShowCityWeather(val => !val)
    }

    const onSelectCity = (city: CityInterface) => {
        switchCityWeatherAndSelectCityScreen()
        setSelectedCity(city)
    }

    const renderMain = () => {
        return showCityWeather ? (
            <CityWeather
                selectedCity={selectedCity}
                country={country}
                onShowCitySelect={switchCityWeatherAndSelectCityScreen}
            />
        ) : (
            <SelectCity onSelectCity={onSelectCity} />
        )
    }

    return (
        <div className='app'>
            <img src={cityBackground} className='img-fluid image-bg' alt='image-background' />
            {renderMain()}
        </div>
    )
}

export default App
