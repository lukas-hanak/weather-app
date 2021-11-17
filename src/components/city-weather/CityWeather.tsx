import React from 'react'
import CityWeatherHeader from './header/CityWeatherHeader'
import CityWeatherDetail from './detail/CityWeatherDetail'
import { CityInterface, Country } from '../../interface/city/CityInterface'
import { useWeather } from '../../api/use-weather/useWeather'

interface CityWeatherProps {
    selectedCity: CityInterface;
    country: Country;
    onShowCitySelect: () => void;
}

const city = {
    'lat': 48.1486,
    'lon': 17.1077,
    'timezone': 'Europe/Bratislava',
    'timezone_offset': 3600,
    'current': {
        'dt': 1637175527,
        'sunrise': 1637128892,
        'sunset': 1637161910,
        'temp': 5.73,
        'feels_like': 5.73,
        'pressure': 1022,
        'humidity': 90,
        'dew_point': 4.22,
        'uvi': 0,
        'clouds': 90,
        'visibility': 6000,
        'wind_speed': 1.03,
        'wind_deg': 230,
        'weather': [
            {
                'id': 804,
                'main': 'Clouds',
                'description': 'overcast clouds',
                'icon': '04n'
            }
        ]
    },
    'minutely': [
        {
            'dt': 1637175540,
            'precipitation': 0
        },
        {
            'dt': 1637175600,
            'precipitation': 0
        },
        {
            'dt': 1637175660,
            'precipitation': 0
        },
        {
            'dt': 1637175720,
            'precipitation': 0
        },
        {
            'dt': 1637175780,
            'precipitation': 0
        },
        {
            'dt': 1637175840,
            'precipitation': 0
        },
        {
            'dt': 1637175900,
            'precipitation': 0
        },
        {
            'dt': 1637175960,
            'precipitation': 0
        },
        {
            'dt': 1637176020,
            'precipitation': 0
        },
        {
            'dt': 1637176080,
            'precipitation': 0
        },
        {
            'dt': 1637176140,
            'precipitation': 0
        },
        {
            'dt': 1637176200,
            'precipitation': 0
        },
        {
            'dt': 1637176260,
            'precipitation': 0
        },
        {
            'dt': 1637176320,
            'precipitation': 0
        },
        {
            'dt': 1637176380,
            'precipitation': 0
        },
        {
            'dt': 1637176440,
            'precipitation': 0
        },
        {
            'dt': 1637176500,
            'precipitation': 0
        },
        {
            'dt': 1637176560,
            'precipitation': 0
        },
        {
            'dt': 1637176620,
            'precipitation': 0
        },
        {
            'dt': 1637176680,
            'precipitation': 0
        },
        {
            'dt': 1637176740,
            'precipitation': 0
        },
        {
            'dt': 1637176800,
            'precipitation': 0
        },
        {
            'dt': 1637176860,
            'precipitation': 0
        },
        {
            'dt': 1637176920,
            'precipitation': 0
        },
        {
            'dt': 1637176980,
            'precipitation': 0
        },
        {
            'dt': 1637177040,
            'precipitation': 0
        },
        {
            'dt': 1637177100,
            'precipitation': 0
        },
        {
            'dt': 1637177160,
            'precipitation': 0
        },
        {
            'dt': 1637177220,
            'precipitation': 0
        },
        {
            'dt': 1637177280,
            'precipitation': 0
        },
        {
            'dt': 1637177340,
            'precipitation': 0
        },
        {
            'dt': 1637177400,
            'precipitation': 0
        },
        {
            'dt': 1637177460,
            'precipitation': 0
        },
        {
            'dt': 1637177520,
            'precipitation': 0
        },
        {
            'dt': 1637177580,
            'precipitation': 0
        },
        {
            'dt': 1637177640,
            'precipitation': 0
        },
        {
            'dt': 1637177700,
            'precipitation': 0
        },
        {
            'dt': 1637177760,
            'precipitation': 0
        },
        {
            'dt': 1637177820,
            'precipitation': 0
        },
        {
            'dt': 1637177880,
            'precipitation': 0
        },
        {
            'dt': 1637177940,
            'precipitation': 0
        },
        {
            'dt': 1637178000,
            'precipitation': 0
        },
        {
            'dt': 1637178060,
            'precipitation': 0
        },
        {
            'dt': 1637178120,
            'precipitation': 0
        },
        {
            'dt': 1637178180,
            'precipitation': 0
        },
        {
            'dt': 1637178240,
            'precipitation': 0
        },
        {
            'dt': 1637178300,
            'precipitation': 0
        },
        {
            'dt': 1637178360,
            'precipitation': 0
        },
        {
            'dt': 1637178420,
            'precipitation': 0
        },
        {
            'dt': 1637178480,
            'precipitation': 0
        },
        {
            'dt': 1637178540,
            'precipitation': 0
        },
        {
            'dt': 1637178600,
            'precipitation': 0
        },
        {
            'dt': 1637178660,
            'precipitation': 0
        },
        {
            'dt': 1637178720,
            'precipitation': 0
        },
        {
            'dt': 1637178780,
            'precipitation': 0
        },
        {
            'dt': 1637178840,
            'precipitation': 0
        },
        {
            'dt': 1637178900,
            'precipitation': 0
        },
        {
            'dt': 1637178960,
            'precipitation': 0
        },
        {
            'dt': 1637179020,
            'precipitation': 0
        },
        {
            'dt': 1637179080,
            'precipitation': 0
        },
        {
            'dt': 1637179140,
            'precipitation': 0
        }
    ],
    'hourly': [
        {
            'dt': 1637172000,
            'temp': 5.81,
            'feels_like': 5.81,
            'pressure': 1022,
            'humidity': 88,
            'dew_point': 3.98,
            'uvi': 0,
            'clouds': 92,
            'visibility': 10000,
            'wind_speed': 1.25,
            'wind_deg': 271,
            'wind_gust': 1.51,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637175600,
            'temp': 5.73,
            'feels_like': 4.16,
            'pressure': 1022,
            'humidity': 90,
            'dew_point': 4.22,
            'uvi': 0,
            'clouds': 90,
            'visibility': 10000,
            'wind_speed': 2.06,
            'wind_deg': 282,
            'wind_gust': 4.42,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637179200,
            'temp': 5.86,
            'feels_like': 4.01,
            'pressure': 1023,
            'humidity': 87,
            'dew_point': 3.87,
            'uvi': 0,
            'clouds': 92,
            'visibility': 10000,
            'wind_speed': 2.39,
            'wind_deg': 288,
            'wind_gust': 6.19,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637182800,
            'temp': 5.98,
            'feels_like': 3.65,
            'pressure': 1023,
            'humidity': 83,
            'dew_point': 3.32,
            'uvi': 0,
            'clouds': 92,
            'visibility': 10000,
            'wind_speed': 3.05,
            'wind_deg': 293,
            'wind_gust': 7.79,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637186400,
            'temp': 6.22,
            'feels_like': 3.31,
            'pressure': 1024,
            'humidity': 79,
            'dew_point': 2.85,
            'uvi': 0,
            'clouds': 92,
            'visibility': 10000,
            'wind_speed': 4.08,
            'wind_deg': 299,
            'wind_gust': 9.2,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637190000,
            'temp': 6.51,
            'feels_like': 3.43,
            'pressure': 1025,
            'humidity': 74,
            'dew_point': 2.22,
            'uvi': 0,
            'clouds': 94,
            'visibility': 10000,
            'wind_speed': 4.56,
            'wind_deg': 305,
            'wind_gust': 9.71,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637193600,
            'temp': 6.66,
            'feels_like': 3.89,
            'pressure': 1026,
            'humidity': 70,
            'dew_point': 1.39,
            'uvi': 0,
            'clouds': 96,
            'visibility': 10000,
            'wind_speed': 4.02,
            'wind_deg': 304,
            'wind_gust': 9.12,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637197200,
            'temp': 6.59,
            'feels_like': 3.86,
            'pressure': 1026,
            'humidity': 69,
            'dew_point': 1.19,
            'uvi': 0,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 3.92,
            'wind_deg': 296,
            'wind_gust': 9.3,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637200800,
            'temp': 6.51,
            'feels_like': 3.54,
            'pressure': 1026,
            'humidity': 68,
            'dew_point': 0.95,
            'uvi': 0,
            'clouds': 99,
            'visibility': 10000,
            'wind_speed': 4.34,
            'wind_deg': 292,
            'wind_gust': 9.99,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637204400,
            'temp': 6.71,
            'feels_like': 3.56,
            'pressure': 1026,
            'humidity': 66,
            'dew_point': 0.65,
            'uvi': 0,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 4.82,
            'wind_deg': 294,
            'wind_gust': 10.57,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637208000,
            'temp': 6.8,
            'feels_like': 3.73,
            'pressure': 1026,
            'humidity': 65,
            'dew_point': 0.65,
            'uvi': 0,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 4.69,
            'wind_deg': 298,
            'wind_gust': 10.56,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637211600,
            'temp': 6.81,
            'feels_like': 3.86,
            'pressure': 1027,
            'humidity': 66,
            'dew_point': 0.78,
            'uvi': 0,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 4.44,
            'wind_deg': 303,
            'wind_gust': 10.62,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637215200,
            'temp': 6.84,
            'feels_like': 3.7,
            'pressure': 1027,
            'humidity': 66,
            'dew_point': 0.87,
            'uvi': 0,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 4.86,
            'wind_deg': 305,
            'wind_gust': 11.54,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637218800,
            'temp': 6.95,
            'feels_like': 3.91,
            'pressure': 1028,
            'humidity': 66,
            'dew_point': 1,
            'uvi': 0,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 4.69,
            'wind_deg': 305,
            'wind_gust': 11.2,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637222400,
            'temp': 7.43,
            'feels_like': 4.45,
            'pressure': 1029,
            'humidity': 65,
            'dew_point': 1.26,
            'uvi': 0.21,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 4.83,
            'wind_deg': 305,
            'wind_gust': 10.51,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637226000,
            'temp': 7.99,
            'feels_like': 5.06,
            'pressure': 1029,
            'humidity': 64,
            'dew_point': 1.41,
            'uvi': 0.42,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 5.05,
            'wind_deg': 306,
            'wind_gust': 10.03,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637229600,
            'temp': 8.86,
            'feels_like': 5.8,
            'pressure': 1029,
            'humidity': 61,
            'dew_point': 1.64,
            'uvi': 0.78,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 5.99,
            'wind_deg': 311,
            'wind_gust': 10.01,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637233200,
            'temp': 9.26,
            'feels_like': 6.29,
            'pressure': 1028,
            'humidity': 59,
            'dew_point': 1.58,
            'uvi': 0.86,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 6.05,
            'wind_deg': 310,
            'wind_gust': 10.89,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637236800,
            'temp': 9.79,
            'feels_like': 7.08,
            'pressure': 1028,
            'humidity': 57,
            'dew_point': 1.56,
            'uvi': 0.72,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 5.7,
            'wind_deg': 302,
            'wind_gust': 9.83,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637240400,
            'temp': 9.91,
            'feels_like': 7.33,
            'pressure': 1027,
            'humidity': 57,
            'dew_point': 1.76,
            'uvi': 0.48,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 5.39,
            'wind_deg': 304,
            'wind_gust': 9.58,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637244000,
            'temp': 9.57,
            'feels_like': 7.23,
            'pressure': 1027,
            'humidity': 59,
            'dew_point': 1.78,
            'uvi': 0.21,
            'clouds': 88,
            'visibility': 10000,
            'wind_speed': 4.56,
            'wind_deg': 303,
            'wind_gust': 8.32,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637247600,
            'temp': 8.53,
            'feels_like': 6.27,
            'pressure': 1028,
            'humidity': 62,
            'dew_point': 1.51,
            'uvi': 0,
            'clouds': 92,
            'visibility': 10000,
            'wind_speed': 3.86,
            'wind_deg': 303,
            'wind_gust': 8.41,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637251200,
            'temp': 7.86,
            'feels_like': 5.63,
            'pressure': 1028,
            'humidity': 64,
            'dew_point': 1.45,
            'uvi': 0,
            'clouds': 94,
            'visibility': 10000,
            'wind_speed': 3.51,
            'wind_deg': 298,
            'wind_gust': 7.57,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637254800,
            'temp': 7.41,
            'feels_like': 5.19,
            'pressure': 1029,
            'humidity': 67,
            'dew_point': 1.55,
            'uvi': 0,
            'clouds': 94,
            'visibility': 10000,
            'wind_speed': 3.34,
            'wind_deg': 294,
            'wind_gust': 8.07,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637258400,
            'temp': 7.16,
            'feels_like': 4.78,
            'pressure': 1029,
            'humidity': 69,
            'dew_point': 1.73,
            'uvi': 0,
            'clouds': 93,
            'visibility': 10000,
            'wind_speed': 3.52,
            'wind_deg': 281,
            'wind_gust': 9.11,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637262000,
            'temp': 5.74,
            'feels_like': 3.26,
            'pressure': 1029,
            'humidity': 76,
            'dew_point': 1.76,
            'uvi': 0,
            'clouds': 21,
            'visibility': 10000,
            'wind_speed': 3.19,
            'wind_deg': 291,
            'wind_gust': 7.42,
            'weather': [
                {
                    'id': 801,
                    'main': 'Clouds',
                    'description': 'few clouds',
                    'icon': '02n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637265600,
            'temp': 5.15,
            'feels_like': 2.83,
            'pressure': 1030,
            'humidity': 80,
            'dew_point': 1.82,
            'uvi': 0,
            'clouds': 36,
            'visibility': 10000,
            'wind_speed': 2.81,
            'wind_deg': 304,
            'wind_gust': 6.58,
            'weather': [
                {
                    'id': 802,
                    'main': 'Clouds',
                    'description': 'scattered clouds',
                    'icon': '03n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637269200,
            'temp': 4.99,
            'feels_like': 2.68,
            'pressure': 1029,
            'humidity': 81,
            'dew_point': 1.92,
            'uvi': 0,
            'clouds': 58,
            'visibility': 10000,
            'wind_speed': 2.75,
            'wind_deg': 291,
            'wind_gust': 6.61,
            'weather': [
                {
                    'id': 803,
                    'main': 'Clouds',
                    'description': 'broken clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637272800,
            'temp': 4.93,
            'feels_like': 2.69,
            'pressure': 1029,
            'humidity': 83,
            'dew_point': 2.11,
            'uvi': 0,
            'clouds': 68,
            'visibility': 10000,
            'wind_speed': 2.65,
            'wind_deg': 295,
            'wind_gust': 5.75,
            'weather': [
                {
                    'id': 803,
                    'main': 'Clouds',
                    'description': 'broken clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637276400,
            'temp': 4.9,
            'feels_like': 2.88,
            'pressure': 1029,
            'humidity': 84,
            'dew_point': 2.26,
            'uvi': 0,
            'clouds': 75,
            'visibility': 10000,
            'wind_speed': 2.39,
            'wind_deg': 291,
            'wind_gust': 4.81,
            'weather': [
                {
                    'id': 803,
                    'main': 'Clouds',
                    'description': 'broken clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637280000,
            'temp': 5.07,
            'feels_like': 2.81,
            'pressure': 1029,
            'humidity': 83,
            'dew_point': 2.3,
            'uvi': 0,
            'clouds': 79,
            'visibility': 10000,
            'wind_speed': 2.71,
            'wind_deg': 283,
            'wind_gust': 6.65,
            'weather': [
                {
                    'id': 803,
                    'main': 'Clouds',
                    'description': 'broken clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637283600,
            'temp': 5.46,
            'feels_like': 2.98,
            'pressure': 1028,
            'humidity': 80,
            'dew_point': 2.24,
            'uvi': 0,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 3.11,
            'wind_deg': 284,
            'wind_gust': 8.76,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637287200,
            'temp': 5.68,
            'feels_like': 2.97,
            'pressure': 1028,
            'humidity': 78,
            'dew_point': 1.96,
            'uvi': 0,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 3.53,
            'wind_deg': 282,
            'wind_gust': 9.65,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637290800,
            'temp': 6.01,
            'feels_like': 3.28,
            'pressure': 1027,
            'humidity': 75,
            'dew_point': 1.75,
            'uvi': 0,
            'clouds': 99,
            'visibility': 10000,
            'wind_speed': 3.69,
            'wind_deg': 279,
            'wind_gust': 9.81,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637294400,
            'temp': 7.62,
            'feels_like': 4.88,
            'pressure': 1027,
            'humidity': 66,
            'dew_point': 1.59,
            'uvi': 0,
            'clouds': 99,
            'visibility': 10000,
            'wind_speed': 4.4,
            'wind_deg': 286,
            'wind_gust': 12.21,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637298000,
            'temp': 8.08,
            'feels_like': 5.18,
            'pressure': 1027,
            'humidity': 64,
            'dew_point': 1.47,
            'uvi': 0,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 5.03,
            'wind_deg': 290,
            'wind_gust': 12.85,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637301600,
            'temp': 8.23,
            'feels_like': 5.14,
            'pressure': 1027,
            'humidity': 63,
            'dew_point': 1.46,
            'uvi': 0,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 5.59,
            'wind_deg': 292,
            'wind_gust': 13.44,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637305200,
            'temp': 8.29,
            'feels_like': 5.26,
            'pressure': 1027,
            'humidity': 63,
            'dew_point': 1.48,
            'uvi': 0,
            'clouds': 98,
            'visibility': 10000,
            'wind_speed': 5.48,
            'wind_deg': 292,
            'wind_gust': 13.79,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637308800,
            'temp': 8.79,
            'feels_like': 5.8,
            'pressure': 1027,
            'humidity': 61,
            'dew_point': 1.56,
            'uvi': 0.08,
            'clouds': 99,
            'visibility': 10000,
            'wind_speed': 5.74,
            'wind_deg': 292,
            'wind_gust': 13.98,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637312400,
            'temp': 9.3,
            'feels_like': 6.4,
            'pressure': 1027,
            'humidity': 59,
            'dew_point': 1.66,
            'uvi': 0.17,
            'clouds': 99,
            'visibility': 10000,
            'wind_speed': 5.87,
            'wind_deg': 296,
            'wind_gust': 13.81,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637316000,
            'temp': 9.5,
            'feels_like': 6.67,
            'pressure': 1027,
            'humidity': 60,
            'dew_point': 1.92,
            'uvi': 0.09,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 5.81,
            'wind_deg': 300,
            'wind_gust': 13.84,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637319600,
            'temp': 9.26,
            'feels_like': 6.33,
            'pressure': 1027,
            'humidity': 62,
            'dew_point': 2.24,
            'uvi': 0.1,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 5.93,
            'wind_deg': 302,
            'wind_gust': 14.04,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0
        },
        {
            'dt': 1637323200,
            'temp': 8.67,
            'feels_like': 5.78,
            'pressure': 1026,
            'humidity': 69,
            'dew_point': 3.26,
            'uvi': 0.08,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 5.37,
            'wind_deg': 304,
            'wind_gust': 14.02,
            'weather': [
                {
                    'id': 500,
                    'main': 'Rain',
                    'description': 'light rain',
                    'icon': '10d'
                }
            ],
            'pop': 0.2,
            'rain': {
                '1h': 0.1
            }
        },
        {
            'dt': 1637326800,
            'temp': 8.82,
            'feels_like': 5.94,
            'pressure': 1026,
            'humidity': 69,
            'dew_point': 3.22,
            'uvi': 0.06,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 5.46,
            'wind_deg': 303,
            'wind_gust': 14.17,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0.28
        },
        {
            'dt': 1637330400,
            'temp': 8.8,
            'feels_like': 5.98,
            'pressure': 1026,
            'humidity': 71,
            'dew_point': 3.59,
            'uvi': 0.02,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 5.28,
            'wind_deg': 302,
            'wind_gust': 13.76,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0.21
        },
        {
            'dt': 1637334000,
            'temp': 9.39,
            'feels_like': 6.81,
            'pressure': 1026,
            'humidity': 65,
            'dew_point': 2.93,
            'uvi': 0,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 5.04,
            'wind_deg': 302,
            'wind_gust': 13.02,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'pop': 0.1
        },
        {
            'dt': 1637337600,
            'temp': 9.53,
            'feels_like': 6.91,
            'pressure': 1026,
            'humidity': 64,
            'dew_point': 2.88,
            'uvi': 0,
            'clouds': 100,
            'visibility': 10000,
            'wind_speed': 5.24,
            'wind_deg': 302,
            'wind_gust': 12.96,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0.04
        },
        {
            'dt': 1637341200,
            'temp': 8.89,
            'feels_like': 6.19,
            'pressure': 1026,
            'humidity': 66,
            'dew_point': 2.69,
            'uvi': 0,
            'clouds': 94,
            'visibility': 10000,
            'wind_speed': 5.04,
            'wind_deg': 301,
            'wind_gust': 12.8,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04n'
                }
            ],
            'pop': 0
        }
    ],
    'daily': [
        {
            'dt': 1637143200,
            'sunrise': 1637128892,
            'sunset': 1637161910,
            'moonrise': 1637159460,
            'moonset': 1637120700,
            'moon_phase': 0.44,
            'temp': {
                'day': 6.28,
                'min': 4.32,
                'max': 7.06,
                'night': 6.22,
                'eve': 6.08,
                'morn': 4.52
            },
            'feels_like': {
                'day': 4.74,
                'night': 3.31,
                'eve': 6.08,
                'morn': 1.97
            },
            'pressure': 1024,
            'humidity': 79,
            'dew_point': 2.79,
            'wind_speed': 4.25,
            'wind_deg': 135,
            'wind_gust': 10.66,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'clouds': 100,
            'pop': 0,
            'uvi': 0.69
        },
        {
            'dt': 1637229600,
            'sunrise': 1637215382,
            'sunset': 1637248246,
            'moonrise': 1637247060,
            'moonset': 1637211120,
            'moon_phase': 0.47,
            'temp': {
                'day': 8.86,
                'min': 4.93,
                'max': 9.91,
                'night': 4.93,
                'eve': 7.86,
                'morn': 6.8
            },
            'feels_like': {
                'day': 5.8,
                'night': 2.69,
                'eve': 5.63,
                'morn': 3.73
            },
            'pressure': 1029,
            'humidity': 61,
            'dew_point': 1.64,
            'wind_speed': 6.05,
            'wind_deg': 310,
            'wind_gust': 11.54,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'clouds': 100,
            'pop': 0,
            'uvi': 0.86
        },
        {
            'dt': 1637316000,
            'sunrise': 1637301871,
            'sunset': 1637334584,
            'moonrise': 1637334780,
            'moonset': 1637301600,
            'moon_phase': 0.5,
            'temp': {
                'day': 9.5,
                'min': 4.9,
                'max': 9.53,
                'night': 7.65,
                'eve': 9.53,
                'morn': 7.62
            },
            'feels_like': {
                'day': 6.67,
                'night': 4.7,
                'eve': 6.91,
                'morn': 4.88
            },
            'pressure': 1027,
            'humidity': 60,
            'dew_point': 1.92,
            'wind_speed': 5.93,
            'wind_deg': 302,
            'wind_gust': 14.17,
            'weather': [
                {
                    'id': 500,
                    'main': 'Rain',
                    'description': 'light rain',
                    'icon': '10d'
                }
            ],
            'clouds': 100,
            'pop': 0.28,
            'rain': 0.1,
            'uvi': 0.17
        },
        {
            'dt': 1637402400,
            'sunrise': 1637388360,
            'sunset': 1637420924,
            'moonrise': 1637422860,
            'moonset': 1637391960,
            'moon_phase': 0.53,
            'temp': {
                'day': 11.39,
                'min': 7.09,
                'max': 12.49,
                'night': 7.09,
                'eve': 10.82,
                'morn': 9.47
            },
            'feels_like': {
                'day': 10.15,
                'night': 7.09,
                'eve': 9.68,
                'morn': 6.26
            },
            'pressure': 1024,
            'humidity': 60,
            'dew_point': 3.82,
            'wind_speed': 7.2,
            'wind_deg': 300,
            'wind_gust': 14.94,
            'weather': [
                {
                    'id': 804,
                    'main': 'Clouds',
                    'description': 'overcast clouds',
                    'icon': '04d'
                }
            ],
            'clouds': 95,
            'pop': 0,
            'uvi': 0.52
        },
        {
            'dt': 1637488800,
            'sunrise': 1637474848,
            'sunset': 1637507267,
            'moonrise': 1637511420,
            'moonset': 1637482260,
            'moon_phase': 0.56,
            'temp': {
                'day': 8.22,
                'min': 4.12,
                'max': 9.97,
                'night': 7.44,
                'eve': 7.83,
                'morn': 5.11
            },
            'feels_like': {
                'day': 6.69,
                'night': 6.17,
                'eve': 7.13,
                'morn': 5.11
            },
            'pressure': 1014,
            'humidity': 71,
            'dew_point': 3.23,
            'wind_speed': 3.22,
            'wind_deg': 324,
            'wind_gust': 6.05,
            'weather': [
                {
                    'id': 801,
                    'main': 'Clouds',
                    'description': 'few clouds',
                    'icon': '02d'
                }
            ],
            'clouds': 24,
            'pop': 0,
            'uvi': 0.86
        },
        {
            'dt': 1637575200,
            'sunrise': 1637561334,
            'sunset': 1637593613,
            'moonrise': 1637600400,
            'moonset': 1637572140,
            'moon_phase': 0.59,
            'temp': {
                'day': 8.01,
                'min': 3.36,
                'max': 9.12,
                'night': 3.36,
                'eve': 7.48,
                'morn': 6.38
            },
            'feels_like': {
                'day': 5.65,
                'night': 0.94,
                'eve': 5.04,
                'morn': 4.75
            },
            'pressure': 1019,
            'humidity': 67,
            'dew_point': 2.06,
            'wind_speed': 4.63,
            'wind_deg': 28,
            'wind_gust': 6.83,
            'weather': [
                {
                    'id': 500,
                    'main': 'Rain',
                    'description': 'light rain',
                    'icon': '10d'
                }
            ],
            'clouds': 100,
            'pop': 0.33,
            'rain': 0.66,
            'uvi': 0.71
        },
        {
            'dt': 1637661600,
            'sunrise': 1637647820,
            'sunset': 1637679960,
            'moonrise': 1637690040,
            'moonset': 1637661600,
            'moon_phase': 0.62,
            'temp': {
                'day': 1.78,
                'min': 0.1,
                'max': 4.25,
                'night': 0.1,
                'eve': 2.51,
                'morn': 2.44
            },
            'feels_like': {
                'day': -0.47,
                'night': 0.1,
                'eve': 0.87,
                'morn': -0.17
            },
            'pressure': 1030,
            'humidity': 48,
            'dew_point': -8.24,
            'wind_speed': 2.54,
            'wind_deg': 338,
            'wind_gust': 3.15,
            'weather': [
                {
                    'id': 500,
                    'main': 'Rain',
                    'description': 'light rain',
                    'icon': '10d'
                }
            ],
            'clouds': 100,
            'pop': 0.38,
            'rain': 0.12,
            'uvi': 1
        },
        {
            'dt': 1637748000,
            'sunrise': 1637734305,
            'sunset': 1637766310,
            'moonrise': 1637780100,
            'moonset': 1637750580,
            'moon_phase': 0.65,
            'temp': {
                'day': 2.89,
                'min': -0.96,
                'max': 5.82,
                'night': 3.64,
                'eve': 4.34,
                'morn': -0.96
            },
            'feels_like': {
                'day': -0.53,
                'night': -0.78,
                'eve': 0.5,
                'morn': -4
            },
            'pressure': 1026,
            'humidity': 47,
            'dew_point': -7.29,
            'wind_speed': 5.94,
            'wind_deg': 145,
            'wind_gust': 10.38,
            'weather': [
                {
                    'id': 803,
                    'main': 'Clouds',
                    'description': 'broken clouds',
                    'icon': '04d'
                }
            ],
            'clouds': 55,
            'pop': 0,
            'uvi': 1
        }
    ]
}

const CityWeather: React.FC<CityWeatherProps> = ({ selectedCity, country, onShowCitySelect }) => {

    const [cityWeather, isCityLoading, cityError] = useWeather(selectedCity.lat, selectedCity.lon)

    if (!cityWeather || isCityLoading || cityError) {
        return (
            <div className='loading-container'>
                <div className='spinner-border text-primary' role='status'/>
            </div>
        )
    }

    return (
        <div className='city-weather-container shadow text-center'>
            <CityWeatherHeader
                name={`${selectedCity.name}, ${country}`}
                onShowCitySelect={onShowCitySelect}
            />
            <CityWeatherDetail cityWeather={cityWeather} />
        </div>
    )
}

export default CityWeather
