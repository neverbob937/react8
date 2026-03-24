import { useContext } from "react";
import { CatsContext } from "../app/contexts/CatsContext";
import { ICat } from "../entitles/Cat/model";
import FlexContainer from "../shared/ui/FlexContainer";
import Panel from "../shared/ui/Panel";
import Button from "../shared/ui/Button";
import CatCard from "../entitles/Cat/CatCard";
import EditCatForm from "./EditCatForm";
import { EditFormContext } from "../app/contexts/EditFormContext";
import { PanelsContext } from "../app/contexts/PanelsContext";

interface ICatCardViewProps {
    cat: ICat;
}
function CatCardView({ cat }: ICatCardViewProps) { 
    const { removeCatById } = useContext(CatsContext);
    const { setCatId } = useContext(EditFormContext);
    const { setPanel } = useContext(PanelsContext);

    return (
        <Panel padding={5}>
            <FlexContainer>
                <CatCard cat={cat} />
                <FlexContainer direction="row">
                    <Button clickAction={() => removeCatById(cat.id)}>
                        Удалить
                    </Button>
                    <Button clickAction={()=>{setCatId(cat.id); setPanel("EditForm")}}>Измeнить</Button>
                </FlexContainer>
            </FlexContainer>
        </Panel>
    );
}
export default CatCardView