import React from 'react'

interface CityWeatherDetailRowUIProps {
    style?: string
    children: React.ReactNode
}

const CityWeatherDetailRowUI: React.FC<CityWeatherDetailRowUIProps> = ({
    style,
    children
}) => {
    return (
        <div className={style ? style : ''}>
            {children}
        </div>
    )
}

export default CityWeatherDetailRowUI
