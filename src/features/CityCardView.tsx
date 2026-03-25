import { useContext } from "react";
import { CitiesContext } from "../app/contexts/CitiesContext";
import { ICity } from "../entitles/City/model";
import FlexContainer from "../shared/ui/FlexContainer";
import Panel from "../shared/ui/Panel";
import Button from "../shared/ui/Button";
import CityCard from "../entitles/City/CityCard";
import { EditFormContext } from "../app/contexts/EditFormContext";
import { PanelsContext } from "../app/contexts/PanelsContext";

interface ICityCardViewProps {
    city: ICity;
}

function CityCardView({ city }: ICityCardViewProps) {
    const { removeCityById } = useContext(CitiesContext);
    const { setCityId } = useContext(EditFormContext);
    const { setPanel } = useContext(PanelsContext);

    return (
        <Panel padding={5}>
            <FlexContainer>
                <CityCard city={city} />
                <FlexContainer direction="row" gap={10}>
                    <Button clickAction={() => removeCityById(city.id)}>
                        Удалить
                    </Button>
                    <Button 
                        clickAction={() => {
                            setCityId(city.id);
                            setPanel("EditForm");
                        }}
                    >
                        Изменить
                    </Button>
                </FlexContainer>
            </FlexContainer>
        </Panel>
    );
}

export default CityCardView;