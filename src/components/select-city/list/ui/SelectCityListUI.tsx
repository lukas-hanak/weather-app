import React from 'react'
import { CityInterface } from '../../../../interface/city/CityInterface'
import { useWeather } from '../../../../api/use-weather/useWeather'
import { roundTemperature } from '../../../../utils/Utils'

interface SelectCityListUIProps {
    city: CityInterface;
    temperatureInCelsius?: number;
    onClick?: () => void;
}

const SelectCityListUI: React.FC<SelectCityListUIProps> = ({
    city,
    onClick
}) => {

    const [cityWeather, isCityLoading, cityError] = useWeather(city.lat, city.lon)

    const onClickInternal = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault()
        onClick && onClick()
    }

    const renderTemperature = () => {
        const temperature = cityWeather
            ? roundTemperature(cityWeather.current.temp)
            : null
        return temperature ? (
            <p className='select-city-list-ui-temperature'>{`${temperature}°C`}</p>
        ) : null
    }

    if (!cityWeather || isCityLoading || cityError) {
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
