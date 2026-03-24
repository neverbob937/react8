import { createContext } from "react";
import { ICat } from "../../entitles/Cat/model";

export interface ICatsContext {
    readonly cats: ICat[];
    addCat: (newCat: ICat) => void;
    removeCatById: (id: number) => void;
    updateCatById: (id: number, newCat: ICat) => void;
}

export const CatsContext = createContext<ICatsContext>({
    cats: [],
    addCat: () => {},
    removeCatById: () => {},
    updateCatById: () => {},
});