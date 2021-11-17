export interface CityWeatherInterface {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: CurrentInterface;
    minutely: MinutelyEntityInterface[];
    hourly: HourlyEntityInterface[];
    daily: DailyEntityInterface[];
}

export interface CurrentInterface {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather?: WeatherEntityInterface[];
}

export interface WeatherEntityInterface {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface MinutelyEntityInterface {
    dt: number;
    precipitation: number;
}

export interface HourlyEntityInterface {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather?: WeatherEntityInterface[]
    pop: number;
    rain?: RainInterface | null;
}

export interface RainInterface {
    '1h': number;
}

export interface DailyEntityInterface {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: TempInterface;
    feels_like: FeelsLikeInterface;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather?: WeatherEntityInterface[];
    clouds: number;
    pop: number;
    uvi: number;
    rain?: number | null;
}

export interface TempInterface {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
}

export interface FeelsLikeInterface {
    day: number;
    night: number;
    eve: number;
    morn: number;
}
