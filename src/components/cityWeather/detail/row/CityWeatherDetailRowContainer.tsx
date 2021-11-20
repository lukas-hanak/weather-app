import React from 'react'

interface CityWeatherDetailRowContainerProps {
    style?: string
    children: React.ReactNode
}

const CityWeatherDetailRowContainer: React.FC<CityWeatherDetailRowContainerProps> = ({
    style,
    children
}) => {
    return (
        <div className={`d-flex mt-3 justify-content-center align-items-center ${style ? style : ''}`}>
            {children}
        </div>
    )
}

export default CityWeatherDetailRowContainer
