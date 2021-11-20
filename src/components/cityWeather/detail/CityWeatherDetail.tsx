import React from 'react'
import CityWeatherDetailRowContainer from './row/CityWeatherDetailRowContainer'
import CityWeatherDetailRowUI from './row/CityWeatherDetailRowUI'
import { CityWeatherInterface, DailyEntityInterface } from '../../../interface/weather-interface/Weatherinterface'
import moment from 'moment'
import CloudIcon from '../../../assets/cloud.svg'
import ArrowUpIcon from '../../../assets/arrow-up.svg'
import ArrowDownIcon from '../../../assets/arrow-down.svg'
import HumidityIcon from '../../../assets/humidity.svg'
import PressureIcon from '../../../assets/pressure.svg'
import WindIcon from '../../../assets/wind.svg'
import SunriseIcon from '../../../assets/sunrise.svg'
import SunsetIcon from '../../../assets/sunset.svg'
import DayTime from '../../../assets/daytime.svg'
import UnionIcon from '../../../assets/union.svg'
import SecondCloudIcon from '../../../assets/cloud-2.svg'
import AirIcon from '../../../assets/air.svg'
import { roundTemperature } from '../../../utils/Utils'

interface CityWeatherDetailProps {
    cityWeather: CityWeatherInterface
}

const CityWeatherDetail: React.FC<CityWeatherDetailProps> = ({ cityWeather }) => {

    const defaultWeatherMain = 'Sunny'

    const getThreeDayForecast = (): DailyEntityInterface[] => {
        return [cityWeather.daily[1], cityWeather.daily[2], cityWeather.daily[3]]
    }

    const renderFirstRow = () => {
        const weatherMain = cityWeather.current.weather && cityWeather.current.weather.length
            ? cityWeather.current.weather[0].main
            : defaultWeatherMain
        const today = cityWeather.daily && cityWeather.daily.length
            ? cityWeather.daily[0]
            : null
        return (
            <CityWeatherDetailRowContainer>
                <CityWeatherDetailRowUI style='mx-4 mx-sm-5'>
                    <img src={CloudIcon} alt='cloud' className='mt-2' />
                    <p className='detail-cloud-text mt-2'>{weatherMain}</p>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='d-flex mx-4 mx-sm-5'>
                    <p className='p-1 detail-temperature-text'>{roundTemperature(cityWeather.current.temp)}</p>
                    <p className='pt-3 detail-temperature-unit'>°C</p>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='mx-4 mx-sm-5'>
                    {<p className='detail-max-min-text'>
                        {today ? roundTemperature(today.temp.max) : 0}°C
                        <img src={ArrowUpIcon} className='pb-2 pl-2' alt='arrow-up'/>
                    </p>}
                    <p className='detail-max-min-text'>
                        {today ? roundTemperature(today.temp.min) : 0}°C
                        <img src={ArrowDownIcon} className='pb-2 pl-2' alt='arrow-up' />
                    </p>
                </CityWeatherDetailRowUI>
            </CityWeatherDetailRowContainer>
        )
    }

    const renderSecondRow = () => {
        return (
            <CityWeatherDetailRowContainer>
                <CityWeatherDetailRowUI style='mx-4 mx-sm-5'>
                    <img src={HumidityIcon} alt='humidity' className='mt-2' />
                    <p className='detail-value'>{cityWeather.current.humidity}%</p>
                    <p className='detail-value-text'>Humidity</p>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='mx-4 mx-sm-5'>
                    <img src={PressureIcon} alt='pressure' className='mt-2 mx-4' />
                    <p className='detail-value'>{cityWeather.current.pressure}mBar</p>
                    <p className='detail-value-text'>Pressure</p>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='mx-4 mx-sm-5'>
                    <img src={WindIcon} alt='wind' className='mt-2' />
                    <p className='detail-value'>{roundTemperature(cityWeather.current.wind_speed)} km/h</p>
                    <p className='detail-value-text'>Wind</p>
                </CityWeatherDetailRowUI>
            </CityWeatherDetailRowContainer>
        )
    }

    const renderThirdRow = () => {
        const sunrise = moment.unix(cityWeather.current.sunrise).format('HH:MM A')
        const sunset = moment.unix(cityWeather.current.sunset).format('HH:MM A')
        const dayTime = moment.unix(cityWeather.current.sunset - cityWeather.current.sunrise)
            .format('HH:MM')
            .split(':')
        return (
            <CityWeatherDetailRowContainer>
                <CityWeatherDetailRowUI style='mx-4 mx-sm-5'>
                    <img src={SunriseIcon} alt='humidity' className='mt-2' />
                    <p className='detail-value'>{sunrise}</p>
                    <p className='detail-value-text'>Sunrise</p>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='mx-4 mx-sm-5'>
                    <img src={SunsetIcon} alt='pressure' className='mt-2 mx-4' />
                    <p className='detail-value'>{sunset}</p>
                    <p className='detail-value-text'>Sunset</p>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='mx-4 mx-sm-5'>
                    <img src={DayTime} alt='wind' className='mt-2' />
                    <p className='detail-value'>{`${dayTime[0]}h ${dayTime[1]}m`}</p>
                    <p className='detail-value-text'>Daytime</p>
                </CityWeatherDetailRowUI>
            </CityWeatherDetailRowContainer>
        )

    }

    const renderFourthRow = () => {
        const threeDayForecast = getThreeDayForecast()
        const firstDay =  moment.unix(threeDayForecast[0].dt)
        const firstDayText = `${firstDay.format('dddd').substring(0, 3)}, ${firstDay.format('DD')}`
        const secondDay =  moment.unix(threeDayForecast[1].dt)
        const secondDayText = `${secondDay.format('dddd').substring(0, 3)}, ${secondDay.format('DD')}`
        const thirdDay =  moment.unix(threeDayForecast[2].dt)
        const thirdDayText = `${thirdDay.format('dddd').substring(0, 3)}, ${thirdDay.format('DD')}`
        return (
            <CityWeatherDetailRowContainer>
                <CityWeatherDetailRowUI style='detail-next-day mx-sm-4'>
                    <img src={UnionIcon} alt='union' className='mt-2' />
                    <p className='detail-value'>{firstDayText}</p>
                    <div className='d-flex justify-content-center'>
                        <p className='detail-another-day-min-max'>
                            {roundTemperature(threeDayForecast[0].temp.max)}°C
                            <img src={ArrowUpIcon} className='detail-another-day-min-max arrow' alt='arrow-up' />
                        </p>
                        <p className='pl-2 detail-another-day-min-max'>
                            {roundTemperature(threeDayForecast[0].temp.min)}°C
                            <img src={ArrowDownIcon} className='detail-another-day-min-max arrow' alt='arrow-up' />
                        </p>
                    </div>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='detail-next-day mx-sm-4'>
                    <img src={SecondCloudIcon} alt='union' className='mt-2' />
                    <p className='detail-value'>{secondDayText}</p>
                    <div className='d-flex justify-content-center'>
                        <p className='detail-another-day-min-max'>
                            {roundTemperature(threeDayForecast[1].temp.max)}°C
                            <img src={ArrowUpIcon} className='detail-another-day-min-max arrow' alt='arrow-up' />
                        </p>
                        <p className='pl-2 detail-another-day-min-max'>
                            {roundTemperature(threeDayForecast[1].temp.min)}°C
                            <img src={ArrowDownIcon} className='detail-another-day-min-max arrow' alt='arrow-up' />
                        </p>
                    </div>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='detail-next-day mx-sm-4'>
                    <img src={AirIcon} alt='union' className='mt-2' />
                    <p className='detail-value'>{thirdDayText}</p>
                    <div className='d-flex justify-content-center'>
                        <p className='detail-another-day-min-max'>
                            {roundTemperature(threeDayForecast[2].temp.max)}°C
                            <img src={ArrowUpIcon} className='detail-another-day-min-max arrow' alt='arrow-up' />
                        </p>
                        <p className='pl-2 detail-another-day-min-max'>
                            {roundTemperature(threeDayForecast[2].temp.min)}°C
                            <img src={ArrowDownIcon} className='detail-another-day-min-max arrow' alt='arrow-up' />
                        </p>
                    </div>
                </CityWeatherDetailRowUI>
            </CityWeatherDetailRowContainer>
        )
    }

    return (
        <div className='d-flex flex-column'>
            {renderFirstRow()}
            {renderSecondRow()}
            {renderThirdRow()}
            {renderFourthRow()}
        </div>
    )
}

export default CityWeatherDetail
