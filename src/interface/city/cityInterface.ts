export type Country = 'Slovakia' | 'Czechia'

export interface CityInterface {
    name: string
    country?: Country;
    lat: number
    lon: number
}
