import React from 'react'

interface SelectCityListUIProps {
    city: string;
    temperatureInCelsius?: number;
    onClick?: (city: string) => void;
}

const SelectCityListUI: React.FC<SelectCityListUIProps> = ({
    city,
    temperatureInCelsius,
    onClick
}) => {

    const onClickInternal = (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault()
        onClick && onClick(city)
    }

    const renderTemperature = () => {
        if (temperatureInCelsius) {
            return <p className='select-city-list-ui-temperature'>{`${temperatureInCelsius}°C`}</p>
        }
        return null
    }

    return (
        <li className='d-flex list-group-item justify-content-between' onClick={onClickInternal}>
            <p className='select-city-list-ui-name'>{city}</p>
            {renderTemperature()}
        </li>
    )
}

export default SelectCityListUI
