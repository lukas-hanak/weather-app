import React from 'react'
import PlaceIcon2 from '../../../../assets/place-icon-2.svg'

interface SelectCityHeaderSearchBarProps {
    placeholder?: string;
    onSearchCity: (text: string) => void;
}

const SelectCityHeaderSearchBar: React.FC<SelectCityHeaderSearchBarProps> = ({ placeholder, onSearchCity }) => {

    const onSearch = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        const text = event.currentTarget.value
        onSearchCity(text)
    }

    return (
        <div className='input-group justify-content-center'>
            <input
                className='select-city-header-search-bar'
                placeholder={placeholder || ''}
                onChange={onSearch}
            />
            <div className='input-group-append'>
                <img src={PlaceIcon2} alt='place-icon-2' className='select-city-header-place-icon' />
            </div>
        </div>
    )
}

export default SelectCityHeaderSearchBar
