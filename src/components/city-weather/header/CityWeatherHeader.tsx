import React from 'react'
import PlaceIcon from '../../../assets/place-icon.svg'

interface CityWeatherHeaderProps {
    name: string;
}

const CityWeatherHeader: React.FC<CityWeatherHeaderProps> = ({ name }) => {

    const getDate = () => {
        const currentDate = new Date()
        const dayName = currentDate.toLocaleString('en-us', {  weekday: 'long' })
        const dayNumber = currentDate.getDay() < 10
            ? `0${currentDate.getDay()}`
            : currentDate.getDay()
        const monthName = currentDate.toLocaleString('en-us', { month: 'long' }).substring(0, 3)
        const yearNumber = currentDate.getFullYear()
        const time = currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return `${dayName}, ${dayNumber} ${monthName} ${yearNumber} | ${time}`
    }

    return (
        <div className='d-flex'>
            <p className='p-2 header-time'>{getDate()}</p>
            <div className='header-name-wrap'>
                <h2 className='p-2 header-city-name'>
                    {name}
                    <img src={PlaceIcon} alt='place-icon' className='mx-2' />
                </h2>
            </div>
        </div>
    )
}

export default CityWeatherHeader
