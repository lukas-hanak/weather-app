import React, { useState } from 'react'
import cityBackground from './assets/city-background.png'
import './App.css'
import CityWeather from './components/city-weather/CityWeather'
import { useWeather } from './api/use-weather/useWeather'
import SelectCity from './components/select-city/SelectCity'

const App = () => {

    const [selectedCity, setSelectedCity] = useState('Bratislava')
    const [city, isLoading, error] = useWeather(selectedCity)
    const [showCityWeather, setShowCityWeather] = useState(true)

    const toggleScreens = () => {
        setShowCityWeather(val => !val)
    }

    const onSelectCity = (city: string) => {
        toggleScreens()
        setSelectedCity(city)
    }

    const renderMain = () => {
        if (showCityWeather)
            return (
                <CityWeather
                    city={selectedCity}
                    country='Slovakia'
                    onShowCitySelect={toggleScreens}
                />
            )
        return <SelectCity onSelectCity={onSelectCity} />
    }

    return (
        <div className='app'>
            <img src={cityBackground} className='img-fluid' alt=''/>
            {renderMain()}
        </div>
    )
}

export default App
