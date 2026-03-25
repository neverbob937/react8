import { useContext } from "react";
import { CitiesContext } from "../app/contexts/CitiesContext";
import FlexContainer from "../shared/ui/FlexContainer";
import Text from "../shared/ui/Text";
import CityCardView from "./CityCardView";   // ← убедись, что файл называется CityCardView.tsx

function CityList() {
    const { cities } = useContext(CitiesContext);
    
    return (
        <FlexContainer gap={20}>
            <Text size={24}>Список городов</Text>
            <FlexContainer>
                {cities.length <= 0 ? (
                    <Text>Городов нет :(</Text>
                ) : (
                    cities.map((city) => (
                        <CityCardView key={city.id} city={city} />
                    ))
                )}
            </FlexContainer>
        </FlexContainer>
    );
}

export default CityList;