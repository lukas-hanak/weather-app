import React, { useEffect } from 'react'
import { CityInterface } from '../../../../interface/city/CityInterface'
import { useWeather } from '../../../../api/useWeather/useWeather'
import { roundTemperature } from '../../../../utils/Utils'

interface SelectCityListUIProps {
    city: CityInterface
    temperatureInCelsius?: number
    onClick?: () => void
}

const SelectCityListUI: React.FC<SelectCityListUIProps> = ({
    city,
    onClick
}) => {

    const [cityWeather, isCityLoading, cityError, executeCityWeather] = useWeather(city.lat, city.lon)

    // INFO:
    // When load the component, we fetch all the weather data in that location
    // For this action we are using hook useWeather
    useEffect(() => {
        executeCityWeather()
    }, [])

    const onClickInternal = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault()
        onClick && onClick()
    }

    const renderTemperature = () => {
        const temperature = cityWeather
            ? roundTemperature(cityWeather.current.temp)
            : null
        if (isCityLoading)
            return <div className='spinner-border text-primary' role='status'/>
        if (cityError && cityError.message)
            return <p className='text-danger'>{cityError.message}</p>
        if (temperature)
            return <p className='select-city-list-ui-temperature'>{`${temperature}°C`}</p>
        return null
    }

    return (
        <li className='d-flex list-group-item justify-content-between' onClick={onClickInternal}>
            <p className='select-city-list-ui-name'>{city.name}</p>
            {renderTemperature()}
        </li>
    )
}

export default SelectCityListUI
