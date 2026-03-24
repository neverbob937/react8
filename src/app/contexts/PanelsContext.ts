import { createContext } from "react";

export type PanelType = "View" | "AddForm" | "EditForm";

export interface IPanelsContext {
    readonly panel: PanelType;
    setPanel: (panel: PanelType) => void;
}
export const PanelsContext = createContext<IPanelsContext>({
    panel: "View",
    setPanel: () => {}
});
