import React from 'react'
import SelectCityHeaderSearchBar from './searchBar/SelectCityHeaderSearchBar'

interface SelectCityHeaderProps {
    title?: string
    onSearchCity: (text: string) => void
}

const SelectCityHeader: React.FC<SelectCityHeaderProps> = ({ title, onSearchCity }) => {
    return (
        <div>
            <h1 className='select-city-header-title'>{title || 'Select City'}</h1>
            <SelectCityHeaderSearchBar
                placeholder='Search City...'
                onSearchCity={onSearchCity}
            />
        </div>
    )
}

export default SelectCityHeader
