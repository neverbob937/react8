import { ReactNode, useState } from "react";
import { EditFormContext, IEditFormContext } from "../contexts/EditFormContext";

interface IEditFormProviderProps {
    children: ReactNode;
}

export default function EditFormProvider({ children }: IEditFormProviderProps) { 
    const [currentId, setCurrentId] = useState<number>(-1);

    const contextValue: IEditFormContext = {
        selectedCatId: currentId,
        setCatId: setCurrentId
    }
    return <EditFormContext value={contextValue}>{children}</EditFormContext>;
}