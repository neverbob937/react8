import { ReactNode, useState } from "react";
import { IPanelsContext, PanelsContext, PanelType} from "../contexts/PanelsContext";

interface IPanelsProviderProps {
    children: ReactNode;
}

export default function PanelsProvider({ children }: IPanelsProviderProps) {
    const [currentPanel, setCurrentPanel] = useState<PanelType>("View");

    const contextValue: IPanelsContext = {
        panel: currentPanel,
        setPanel: setCurrentPanel
    }
    return <PanelsContext value={contextValue}>{children}</PanelsContext>;
}