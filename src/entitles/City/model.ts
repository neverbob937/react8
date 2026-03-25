import { CityCountry, CityPopulation } from "./types";

export interface ICity { 
    id: number;
    name: string;
    country: CityCountry;     // "Страна"
    population: CityPopulation; // "Население"
}