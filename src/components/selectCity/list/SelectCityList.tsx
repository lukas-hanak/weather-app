import React from 'react'
import SelectCityListUI from './ui/SelectCityListUI'
import { cities } from '../../../config/cities'
import { CityInterface } from '../../../interface/city/cityInterface'

interface SelectCityProps {
    searchCity?: string | null
    onSelectCity?: (city: CityInterface) => void
}

const SelectCityList: React.FC<SelectCityProps> = ({ searchCity, onSelectCity }) => {

    const renderCities = () => (
        cities.map((city, index) => {
            if ((searchCity && city.name.toLocaleLowerCase().includes(searchCity.toLocaleLowerCase())) || !searchCity)
                return (
                    <SelectCityListUI
                        key={index.toString()}
                        city={city}
                        onClick={() => onSelectCity && onSelectCity(city)}
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
