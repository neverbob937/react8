import { CatBreed, CatColor } from "./types";

export interface ICat { 
    id: number,
    name: string;
    color: CatColor;
    breed: CatBreed;
}
