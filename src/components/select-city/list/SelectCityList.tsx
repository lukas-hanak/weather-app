import React from 'react'
import SelectCityListUI from './ui/SelectCityListUI'
import { cities } from '../../../config/Cities'

interface SelectCityProps {
    searchCity?: string;
    onSelectCity?: (city: string) => void;
}

const SelectCityList: React.FC<SelectCityProps> = ({ searchCity, onSelectCity }) => {

    const renderCities = () => (
        cities.map((city, index) => {
            if ((searchCity && city.toLocaleLowerCase().includes(searchCity.toLocaleLowerCase())) || !searchCity)
                return (
                    <SelectCityListUI
                        key={index.toString()}
                        city={city}
                        temperatureInCelsius={Math.floor(Math.random() * 11)}
                        onClick={city => onSelectCity && onSelectCity(city)}
                    />
                )
            return null
        })
    )

    return (
        <ul className='list-group list-group-flush'>
            {renderCities()}
        </ul>
    )
}

export default SelectCityList
