import { ReactNode, useState } from "react";
import { CatsContext, ICatsContext } from "../contexts/CatsContext"; import { ICat } from "../../entitles/Cat/model";

interface ICatsProviderProps {
    children: ReactNode;
}

export default function CatsProvider({ children }: ICatsProviderProps) { 
    const [currentCats, setCurrentCats] = useState<ICat[]>([]);

    function addCatHandle (newCat: ICat) {
        setCurrentCats([...currentCats, newCat]);
    }

    function removeCatByIdHandle(id: number) { 
        setCurrentCats(currentCats.filter((cat) => cat.id !== id));
    }

    function updateCatByIdHandle(id: number, newCat: ICat) {
        setCurrentCats(currentCats.map((cat) => (cat.id === id ? newCat: cat)));
    }
    
    const contextValue: ICatsContext = {
        cats: currentCats,
        addCat: addCatHandle,
        removeCatById: removeCatByIdHandle, updateCatById: updateCatByIdHandle,
    };

return <CatsContext value={contextValue}>{children}</CatsContext>;
}