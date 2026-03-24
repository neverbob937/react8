import Button from "../../shared/ui/Button";
import FlexContainer from "../../shared/ui/FlexContainer"; 
import Panel from "../../shared/ui/Panel";
import Text from "../../shared/ui/Text";
import { ICat } from "../../entitles/Cat/model";
import { CatColor } from "./types";
import { useContext } from "react";
import { CatsContext } from "../../app/contexts/CatsContext";
interface ICatCardProps{
    cat : ICat
}
function CatCard({ cat }: ICatCardProps) {

    const {id, name, color, breed} = cat

    const {removeCatById} = useContext(CatsContext)

    return (
        <Panel padding={5}>
            <FlexContainer>
                <Text>
                    #{id}: {name}
                </Text>
                <Text>
                    Жанр: {color}
                </Text>
                <Text>
                    Режисер: {breed}
                </Text>
                <Button clickAction={()=>removeCatById(cat.id)}>Удалить</Button>
            </FlexContainer>
        </Panel>
    );
}

export default CatCard;