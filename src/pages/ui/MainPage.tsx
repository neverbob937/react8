import { ReactNode, useContext } from "react"
import CatCard from "../../entitles/Cat/CatCard"
import CatList from "../../features/CatList"
import FlexContainer from "../../shared/ui/FlexContainer"
import Panel from "../../shared/ui/Panel"
import Text from "../../shared/ui/Text"
import MainMenu from "./MainMenu"
import { PanelsContext, PanelType } from "../../app/contexts/PanelsContext"
import AddCatForm from "../../features/AddCatForm"
import { EditFormContext } from "../../app/contexts/EditFormContext"
import EditFormProvider from "../../app/providers/EditFormProvider"
import EditCatForm from "../../features/EditCatForm"

function MainPage() {
    const {panel} = useContext(PanelsContext)

    const panels : Record<PanelType, ReactNode> = 
    {
        "View" : <CatList/>,
        "AddForm" : <AddCatForm/>,
        "EditForm" : <EditCatForm/>
    }
    return (
        <>
            <FlexContainer>
                <Text size={30}>фабрика фильмов</Text>
                <FlexContainer direction="row">
                    <MainMenu/>
                    <Panel padding={25}>
                        <EditFormProvider>{panels[panel]}</EditFormProvider>
                    </Panel>
                </FlexContainer>
            </FlexContainer>
        </>
    );
}
export default MainPage;