import React, { useState } from 'react'
import cityBackground from './assets/city-background.png'
import './App.css'
import CityWeather from './components/city-weather/CityWeather'
import SelectCity from './components/select-city/SelectCity'
import { cities } from './config/Cities'
import { CityInterface } from './interface/city/CityInterface'

const App = () => {

    const country = 'Slovakia'
    const [selectedCity, setSelectedCity] = useState<CityInterface>(cities[0])
    const [showCityWeather, setShowCityWeather] = useState(true)

    const toggleScreens = () => {
        setShowCityWeather(val => !val)
    }

    const onSelectCity = (city: CityInterface) => {
        toggleScreens()
        setSelectedCity(city)
    }

    const renderMain = () => {
        return showCityWeather ? (
            <CityWeather
                selectedCity={selectedCity}
                country={country}
                onShowCitySelect={toggleScreens}
            />
        ) : (
            <SelectCity onSelectCity={onSelectCity} />
        )
    }

    return (
        <div className='app'>
            <img src={cityBackground} className='img-fluid image-bg' alt=''/>
            {renderMain()}
        </div>
    )
}

export default App
