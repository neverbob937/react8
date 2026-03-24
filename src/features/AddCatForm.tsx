import { useContext, useState } from "react";
import { ICat } from "../entitles/Cat/model";
import FlexContainer from "../shared/ui/FlexContainer";
import Text from "../shared/ui/Text";
import Input from "../shared/ui/Input";
import Button from "../shared/ui/Button";
import { CatBreed, CatColor } from "../entitles/Cat/types";
import Select from "../shared/ui/Select";
import { CatsContext } from "../app/contexts/CatsContext";
import { PanelsContext } from "../app/contexts/PanelsContext";

function AddCatForm() {

    const {setPanel} = useContext(PanelsContext)

    const {addCat} = useContext(CatsContext);

    const[newCat, setNewCat] = useState<ICat>({
        id: Date.now(),
        name: "Без Имени",
        color: "черный",
        breed: "дворовая",
    });

    return (
        <FlexContainer gap = {20}>
            <Text size={24}>создание кошки</Text>
            <FlexContainer alignItems="stretch">
                <FlexContainer direction="row">
                    <Text>Имя:</Text>
                    <Input placeholder="Введите имя кошки" changeAction={(value) => setNewCat({ ...newCat, name: value})}/>
                </FlexContainer>
                 <FlexContainer direction="row">
                    <Text>Цвет:</Text>
                    <Select 
                    options={
                            ["белый", "черный", "рыжий"] as CatColor[]
                        }  
                        changeAction={(value) => 
                            setNewCat({ ...newCat, color: value as CatColor})
                        }
                    />
                </FlexContainer>
                 <FlexContainer direction="row">
                    <Text>Порода:</Text>
                    <Select 
                        options={
                            ["дворовая", "домашняя", "лысая"] as CatBreed[]
                        } 
                        changeAction={(value) => 
                            setNewCat({ ...newCat, breed: value as CatBreed})
                        }
                    />
                </FlexContainer>
                <Button clickAction={()=> {addCat(newCat); setPanel("View")}}>Создать</Button>
            </FlexContainer>
        </FlexContainer>
    );
}

export default AddCatForm;