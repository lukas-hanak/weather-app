import React from 'react'
import CityWeatherDetailRowContainer from './row/CityWeatherDetailRowContainer'
import CityWeatherDetailRowUI from './row/CityWeatherDetailRowUI'
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

interface CityWeatherDetailProps {

}

const CityWeatherDetail: React.FC<CityWeatherDetailProps> = () => {

    const renderFirstRow = () => {
        return (
            <CityWeatherDetailRowContainer>
                <CityWeatherDetailRowUI style='mx-5'>
                    <img src={CloudIcon} alt='cloud' className='mt-2' />
                    <p className='detail-cloud-text'>Sunny</p>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='d-flex mx-5'>
                    <p className='p-1 detail-temperature-text'>33</p>
                    <p className='pt-3 detail-temperature-unit'>°C</p>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='mx-5'>
                    <p className='detail-max-min-text'>
                        35°C
                        <img src={ArrowUpIcon} className='pb-2 pl-2' alt='arrow-up' />
                    </p>
                    <p className='detail-max-min-text'>
                        27°C
                        <img src={ArrowDownIcon} className='pb-2 pl-2' alt='arrow-up' />
                    </p>
                </CityWeatherDetailRowUI>
            </CityWeatherDetailRowContainer>
        )
    }

    const renderSecondRow = () => {
        return (
            <CityWeatherDetailRowContainer>
                <CityWeatherDetailRowUI style='mx-5'>
                    <img src={HumidityIcon} alt='humidity' className='mt-2' />
                    <p className='detail-value'>49%</p>
                    <p className='detail-value-text'>Humidity</p>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='mx-5'>
                    <img src={PressureIcon} alt='pressure' className='mt-2 mx-4' />
                    <p className='detail-value'>1,007mBar</p>
                    <p className='detail-value-text'>Pressure</p>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='mx-5'>
                    <img src={WindIcon} alt='wind' className='mt-2' />
                    <p className='detail-value'>23 km/h</p>
                    <p className='detail-value-text'>Wind</p>
                </CityWeatherDetailRowUI>
            </CityWeatherDetailRowContainer>
        )
    }

    const renderThirdRow = () => {
        return (
            <CityWeatherDetailRowContainer>
                <CityWeatherDetailRowUI style='mx-5'>
                    <img src={SunriseIcon} alt='humidity' className='mt-2' />
                    <p className='detail-value'>6:03 AM</p>
                    <p className='detail-value-text'>Sunrise</p>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='mx-5'>
                    <img src={SunsetIcon} alt='pressure' className='mt-2 mx-4' />
                    <p className='detail-value'>7:05 PM</p>
                    <p className='detail-value-text'>Sunset</p>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='mx-5'>
                    <img src={DayTime} alt='wind' className='mt-2' />
                    <p className='detail-value'>13h 1m</p>
                    <p className='detail-value-text'>Daytime</p>
                </CityWeatherDetailRowUI>
            </CityWeatherDetailRowContainer>
        )

    }

    const renderFourthRow = () => {
        return (
            <CityWeatherDetailRowContainer>
                <CityWeatherDetailRowUI style='detail-next-day'>
                    <img src={UnionIcon} alt='union' className='mt-2' />
                    <p className='detail-value'>Thu, 09</p>
                    <div className='d-flex justify-content-center'>
                        <p className='detail-another-day-min-max'>
                            35°C
                            <img src={ArrowUpIcon} className='detail-another-day-min-max arrow' alt='arrow-up' />
                        </p>
                        <p className='pl-2 detail-another-day-min-max'>
                            35°C
                            <img src={ArrowDownIcon} className='detail-another-day-min-max arrow' alt='arrow-up' />
                        </p>
                    </div>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='detail-next-day'>
                    <img src={SecondCloudIcon} alt='union' className='mt-2' />
                    <p className='detail-value'>Fri, 10</p>
                    <div className='d-flex justify-content-center'>
                        <p className='detail-another-day-min-max'>
                            35°C
                            <img src={ArrowUpIcon} className='detail-another-day-min-max arrow' alt='arrow-up' />
                        </p>
                        <p className='pl-2 detail-another-day-min-max'>
                            35°C
                            <img src={ArrowDownIcon} className='detail-another-day-min-max arrow' alt='arrow-up' />
                        </p>
                    </div>
                </CityWeatherDetailRowUI>
                <CityWeatherDetailRowUI style='detail-next-day'>
                    <img src={AirIcon} alt='union' className='mt-2' />
                    <p className='detail-value'>Sat, 11</p>
                    <div className='d-flex justify-content-center'>
                        <p className='detail-another-day-min-max'>
                            35°C
                            <img src={ArrowUpIcon} className='detail-another-day-min-max arrow' alt='arrow-up' />
                        </p>
                        <p className='pl-2 detail-another-day-min-max'>
                            35°C
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
