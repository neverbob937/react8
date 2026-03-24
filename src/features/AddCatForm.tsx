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
        color: "Ужас",
        breed: "Стивен",
    });

    return (
        <FlexContainer gap = {20}>
            <Text size={24}>создание Фильма</Text>
            <FlexContainer alignItems="stretch">
                <FlexContainer direction="row">
                    <Text>Название:</Text>
                    <Input placeholder="Введите название фильма" changeAction={(value) => setNewCat({ ...newCat, name: value})}/>
                </FlexContainer>
                 <FlexContainer direction="row">
                    <Text>Жанр:</Text>
                    <Select 
                    options={
                            ["Ужас" , "Драмма" , "Комедия"] as CatColor[]
                        }  
                        changeAction={(value) => 
                            setNewCat({ ...newCat, color: value as CatColor})
                        }
                    />
                </FlexContainer>
                 <FlexContainer direction="row">
                    <Text>Режисер:</Text>
                    <Select 
                        options={
                            ["Стивен" , "Джеймс" , "Агин"] as CatBreed[]
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