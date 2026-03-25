import { ReactNode, useState } from "react";
import { CitiesContext, ICitiesContext } from "../contexts/CitiesContext";
import { ICity } from "../../entitles/City/model";

interface ICitiesProviderProps {
    children: ReactNode;
}

export default function CitiesProvider({ children }: ICitiesProviderProps) { 
    const [currentCities, setCurrentCities] = useState<ICity[]>([]);

    const addCityHandle = (newCity: ICity) => {
        setCurrentCities(prev => [...prev, newCity]);
    };

    const removeCityByIdHandle = (id: number) => { 
        setCurrentCities(prev => prev.filter(city => city.id !== id));
    };

    const updateCityByIdHandle = (id: number, newCity: ICity) => {
        setCurrentCities(prev => prev.map(city => 
            city.id === id ? newCity : city
        ));
    };
    
    const contextValue: ICitiesContext = {
        cities: currentCities,
        addCity: addCityHandle,
        removeCityById: removeCityByIdHandle,
        updateCityById: updateCityByIdHandle,
    };

    return <CitiesContext.Provider value={contextValue}>{children}</CitiesContext.Provider>;
}