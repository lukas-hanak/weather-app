export type Country = 'Slovakia' | 'Czechia' | 'Russia'

export interface CityInterface {
    name: string
    country?: Country;
    lat: number
    lon: number
}
