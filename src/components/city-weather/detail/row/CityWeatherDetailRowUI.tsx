import React from 'react'

interface CityWeatherDetailRowUIProps {
    style?: string;
    // eslint-disable-next-line no-undef
    children: JSX.Element | JSX.Element[];
}

const CityWeatherDetailRowUI: React.FC<CityWeatherDetailRowUIProps> = ({
    style,
    children
}) => {
    return (
        <div className={`${style}`}>
            {children}
        </div>
    )
}

export default CityWeatherDetailRowUI
