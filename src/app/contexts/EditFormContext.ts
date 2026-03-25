import { createContext } from "react";

export interface IEditFormContext {
    readonly selectedCityId: number;
    setCityId: (id: number) => void;
}

export const EditFormContext = createContext<IEditFormContext>({
    selectedCityId: -1,
    setCityId: () => {}
});