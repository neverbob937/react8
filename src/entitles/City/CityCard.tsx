import FlexContainer from "../../shared/ui/FlexContainer"; 
import Panel from "../../shared/ui/Panel";
import Text from "../../shared/ui/Text";
import Button from "../../shared/ui/Button";
import { ICity } from "./model";
import { useContext } from "react";
import { CitiesContext } from "../../app/contexts/CitiesContext";

interface ICityCardProps {
    city: ICity;
}

function CityCard({ city }: ICityCardProps) {
    const { id, name, country, population } = city;
    const { removeCityById } = useContext(CitiesContext);

    return (
        <Panel padding={10}>
            <FlexContainer gap={8}>
                <Text size={18}>
                    #{id}: {name}
                </Text>
                <Text>Страна: {country}</Text>
                <Text>Население: {population}</Text>
                <Button clickAction={() => removeCityById(id)}>
                    Удалить
                </Button>
            </FlexContainer>
        </Panel>
    );
}

export default CityCard;