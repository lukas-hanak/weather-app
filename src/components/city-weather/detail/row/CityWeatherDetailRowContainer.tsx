import React from 'react'

interface CityWeatherDetailRowContainerProps {
    style?: string
    // eslint-disable-next-line no-undef
    children: JSX.Element | JSX.Element[]
}

const CityWeatherDetailRowContainer: React.FC<CityWeatherDetailRowContainerProps> = ({
    style,
    children
}) => {
    return (
        <div className={`d-flex mt-3 justify-content-center align-items-center ${style}`}>
            {children}
        </div>
    )
}

export default CityWeatherDetailRowContainer
