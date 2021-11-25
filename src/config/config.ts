const weatherApi = {
    units: 'metric',
    key: '969fba65b9db3222e4b5ac237719fef8'
}

export const config = {
    weatherApiUrl: `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/onecall?appid=${weatherApi.key}&units=${weatherApi.units}`
}
