import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from "uuid";

@Injectable({
    providedIn: 'root'
})

export class DbzService{
    characters: Character[] = [
        {
            id: uuid(),
            name: 'Krilling',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7500
        },
        {
            id: uuid(),
            name: 'Picoro',
            power: 5000
        },
        {
            id: uuid(),
            name: 'Gohan',
            power: 4000
        },
        {
            id: uuid(),
            name: 'Napa',
            power: 6000
        },
        {
            id: uuid(),
            name: 'Yamsha',
            power: 1500
        },
    ]

    addCharacter(character: Character): void {
        const newCharacter: Character = {id: uuid(), ...character};
        this.characters.push(newCharacter);
    }

    // onDeleteCharacter(index: number): void {
    //     this.characters.splice(index,1);
    // }

    onDeleteCharacterById(id: string): void {
        this.characters = this.characters.filter(character => character.id !== id);
    }
}