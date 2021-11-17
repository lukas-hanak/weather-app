import React from 'react'
import SelectCityHeader from './header/SelectCityHeader'
import SelectCityList from './list/SelectCityList'
import { CityInterface } from '../../interface/city/CityInterface'

interface SelectCityProps {
    onSelectCity?: (city: CityInterface) => void;
}

const SelectCity: React.FC<SelectCityProps> = ({ onSelectCity }) => {

    const [searchCity, setSearchCity] = React.useState('')

    return (
        <div className='select-city-container shadow'>
            <SelectCityHeader
                title='Location'
                onSearchCity={text => setSearchCity(text)}
            />
            <SelectCityList
                searchCity={searchCity}
                onSelectCity={city => onSelectCity && onSelectCity(city)}
            />
        </div>
    )
}

export default SelectCity
