import { ReactNode, useContext } from "react";
import FlexContainer from "../../shared/ui/FlexContainer";
import Text from "../../shared/ui/Text";
import Panel from "../../shared/ui/Panel";                    // ← Добавили импорт!
import MainMenu from "./MainMenu";
import { PanelsContext, PanelType } from "../../app/contexts/PanelsContext";
import CityList from "../../features/CityList";
import AddCityForm from "../../features/AddCityForm";
import EditCityForm from "../../features/EditCityForm";

function MainPage() {
    const { panel } = useContext(PanelsContext);

    const panels: Record<PanelType, ReactNode> = {
        "View": <CityList />,
        "AddForm": <AddCityForm />,
        "EditForm": <EditCityForm />,
    };

    return (
        <FlexContainer gap={20} direction="column" alignItems="flex-start">
            <Text size={30}>Города</Text>

            <FlexContainer direction="row" gap={20} alignItems="flex-start">
                <MainMenu />

                <Panel padding={25}>
                    {panels[panel]}
                </Panel>
            </FlexContainer>
        </FlexContainer>
    );
}

export default MainPage;