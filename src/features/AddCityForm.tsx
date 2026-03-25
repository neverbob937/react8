import { useContext, useState } from "react";
import { ICity } from "../entitles/City/model";
import FlexContainer from "../shared/ui/FlexContainer";
import Text from "../shared/ui/Text";
import Input from "../shared/ui/Input";
import Button from "../shared/ui/Button";
import Select from "../shared/ui/Select";
import { CityCountry, CityPopulation } from "../entitles/City/types";
import { CitiesContext } from "../app/contexts/CitiesContext";
import { PanelsContext } from "../app/contexts/PanelsContext";

function AddCityForm() {
    const { setPanel } = useContext(PanelsContext);
    const { addCity } = useContext(CitiesContext);

    const [newCity, setNewCity] = useState<ICity>({
        id: Date.now(),
        name: "",
        country: "маленькая",
        population: "маленькая",
    });

    return (
        <FlexContainer gap={20}>
            <Text size={24}>Создание города</Text>

            <FlexContainer alignItems="stretch" gap={15}>
                <FlexContainer direction="row" gap={10}>
                    <Text>Название:</Text>
                    <Input 
                        placeholder="Введите название города"
                        value={newCity.name}
                        changeAction={(value) => setNewCity({ ...newCity, name: value })}
                    />
                </FlexContainer>

                <FlexContainer direction="row" gap={10}>
                    <Text>Страна:</Text>
                    <Select 
                        options={["маленькая", "средняя", "большая"] as CityCountry[]}
                        value={newCity.country}
                        changeAction={(value) => 
                            setNewCity({ ...newCity, country: value as CityCountry })
                        }
                    />
                </FlexContainer>

                <FlexContainer direction="row" gap={10}>
                    <Text>Население:</Text>
                    <Select 
                        options={["маленькая", "средняя", "большая"] as CityPopulation[]}
                        value={newCity.population}
                        changeAction={(value) => 
                            setNewCity({ ...newCity, population: value as CityPopulation })
                        }
                    />
                </FlexContainer>

                <Button 
                    clickAction={() => {
                        addCity(newCity);
                        setPanel("View");
                    }}
                >
                    Создать
                </Button>
            </FlexContainer>
        </FlexContainer>
    );
}

export default AddCityForm;