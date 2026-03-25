import { createContext } from "react";
import { ICity } from "../../entitles/City/model";

export interface ICitiesContext {
    readonly cities: ICity[];
    addCity: (newCity: ICity) => void;
    removeCityById: (id: number) => void;
    updateCityById: (id: number, newCity: ICity) => void;
}

export const CitiesContext = createContext<ICitiesContext>({
    cities: [],
    addCity: () => {},
    removeCityById: () => {},
    updateCityById: () => {},
});