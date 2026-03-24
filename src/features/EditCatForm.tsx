import { useContext, useState } from "react";
import { EditFormContext } from "../app/contexts/EditFormContext";
import { CatsContext } from "../app/contexts/CatsContext";
import { ICat } from "../entitles/Cat/model";
import Text from "../shared/ui/Text";
import FlexContainer from "../shared/ui/FlexContainer";
import Select from "../shared/ui/Select";
import Input from "../shared/ui/Input";
import Button from "../shared/ui/Button";
import { CatBreed, CatColor } from "../entitles/Cat/types";
import { PanelsContext } from "../app/contexts/PanelsContext";

function EditCatForm() {

    const {selectedCatId} = useContext(EditFormContext);

    const {cats, updateCatById} = useContext(CatsContext);

    const editedcat = cats.find((cat) => cat.id === selectedCatId)

    const {setPanel} = useContext(PanelsContext)

    const [newCat, setNewCat] = useState<ICat | undefined>(editedcat);

    if (newCat === undefined) return <Text>Кот не найден!</Text>

    return (
        <FlexContainer gap={20}>
            <Text size={24}>Создание кошки</Text>
            <FlexContainer alignItems="stretch"> <FlexContainer direction="row"> 
                <Text>Имя: </Text>
                <Input
                    placeholder="Введите имя кошки"
                    changeAction={(value) =>
                        setNewCat({ ...newCat, name: value })
                    }
                    defaultValue={newCat.name}
                />
            </FlexContainer>
            <FlexContainer direction="row">
                <Text>Цвет: </Text>
                <Select
                    options={["белый", "черный", "рыжий"] as CatColor[]} 
                    changeAction={(value) =>
                        setNewCat({ ...newCat, color: value as CatColor })
                    }
                    defaultValue={newCat.color}
                />
            </FlexContainer>
            <FlexContainer direction="row">
                <Text>Порода: </Text>
                    <Select
                        options={
                            ["дворовая", "домашняя", "лысая"] as CatBreed[]
                        }
                        changeAction={(value) =>
                            setNewCat({ ...newCat, breed: value as CatBreed })
                        }
                        defaultValue={newCat.breed}
                    />
                </FlexContainer>
                <Button clickAction={() => {updateCatById(selectedCatId, newCat); setPanel("View")}}>Сохранить</Button>
            </FlexContainer>
        </FlexContainer>
    )
};

export default EditCatForm;