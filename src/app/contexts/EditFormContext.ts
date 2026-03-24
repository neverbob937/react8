import { createContext } from "react";

export interface IEditFormContext {
    readonly selectedCatId: number; 
    setCatId: (id: number) => void;
}
export const EditFormContext = createContext<IEditFormContext>({
    selectedCatId: -1,
    setCatId: () => {}
});