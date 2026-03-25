import { useContext, useState, useEffect } from "react";
import { ICity } from "../entitles/City/model";
import { CityCountry, CityPopulation } from "../entitles/City/types";
import Text from "../shared/ui/Text";
import FlexContainer from "../shared/ui/FlexContainer";
import Select from "../shared/ui/Select";
import Input from "../shared/ui/Input";
import Button from "../shared/ui/Button";
import { EditFormContext } from "../app/contexts/EditFormContext";
import { CitiesContext } from "../app/contexts/CitiesContext";
import { PanelsContext } from "../app/contexts/PanelsContext";

function EditCityForm() {
    const { selectedCityId } = useContext(EditFormContext);
    const { cities, updateCityById } = useContext(CitiesContext);
    const { setPanel } = useContext(PanelsContext);

    const cityToEdit = cities.find((city) => city.id === selectedCityId);

    const [editedCity, setEditedCity] = useState<ICity | undefined>(undefined);

    useEffect(() => {
        if (cityToEdit) {
            setEditedCity({ ...cityToEdit });
        }
    }, [cityToEdit]);

    if (!editedCity) {
        return <Text>Город не найден!</Text>;
    }

    return (
        <FlexContainer gap={20}>
            <Text size={24}>Редактирование города</Text>

            <FlexContainer alignItems="stretch" gap={15}>
                <FlexContainer direction="row" gap={10}>
                    <Text>Название:</Text>
                    <Input
                        placeholder="Введите название города"
                        value={editedCity.name}
                        changeAction={(value) =>
                            setEditedCity({ ...editedCity, name: value })
                        }
                    />
                </FlexContainer>

                <FlexContainer direction="row" gap={10}>
                    <Text>Страна:</Text>
                    <Select
                        options={["маленькая", "средняя", "большая"] as CityCountry[]}
                        value={editedCity.country}
                        changeAction={(value) =>
                            setEditedCity({ ...editedCity, country: value as CityCountry })
                        }
                    />
                </FlexContainer>

                <FlexContainer direction="row" gap={10}>
                    <Text>Население:</Text>
                    <Select
                        options={["маленькая", "средняя", "большая"] as CityPopulation[]}
                        value={editedCity.population}
                        changeAction={(value) =>
                            setEditedCity({ ...editedCity, population: value as CityPopulation })
                        }
                    />
                </FlexContainer>

                <Button
                    clickAction={() => {
                        updateCityById(selectedCityId, editedCity);
                        setPanel("View");
                    }}
                >
                    Сохранить изменения
                </Button>
            </FlexContainer>
        </FlexContainer>
    );
}

export default EditCityForm;