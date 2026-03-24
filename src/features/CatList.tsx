import { useContext } from "react";
import { CatsContext } from "../app/contexts/CatsContext";
import FlexContainer from "../shared/ui/FlexContainer";
import Text from "../shared/ui/Text";
import CatCardView from "./CatCardView";

function CatList() {
    const { cats } = useContext(CatsContext);
    
    return (
        <FlexContainer gap={20}>
            <Text size={24}>Список фильмов</Text>
            <FlexContainer>
                {cats.length <= 0 ? ( 
                    <Text>Фильмов нету :(</Text>
                ) : (
                    cats.map((cat) => <CatCardView key={cat.id} cat={cat} />)
                )}
            </FlexContainer>
        </FlexContainer>
    );
}
export default CatList;