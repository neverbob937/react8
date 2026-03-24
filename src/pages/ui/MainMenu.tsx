import { useContext } from "react";
import { PanelsContext } from "../../app/contexts/PanelsContext";
import Button from "../../shared/ui/Button";
import FlexContainer from "../../shared/ui/FlexContainer";
import Panel from "../../shared/ui/Panel"; 
import Text from "../../shared/ui/Text";
function MainMenu() {

    const {setPanel} = useContext(PanelsContext)
    return (
        <Panel padding={25}>
            <FlexContainer gap={20}>
                <Text size={24}>меню:</Text> 
                    <FlexContainer >
                        <Button clickAction={() => setPanel("View")}>список фильмов</Button>
                        <Button clickAction={() => setPanel("AddForm")}>создать фильм</Button>
                    </FlexContainer>
            </FlexContainer>
        </Panel>
    );
}
export default MainMenu;