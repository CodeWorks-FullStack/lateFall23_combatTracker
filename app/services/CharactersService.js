import { AppState } from "../AppState.js";
import { Character } from "../models/Character.js";


class CharactersService{
  addCharacter(newName, newRole) {
    let createdCharacter = new Character(newName, newRole, 10)
    AppState.characters.push(createdCharacter)
  }


  hurtCharacter(characterName){
    let selectedCharacter = AppState.characters.find(character => character.name == characterName)
    console.log('🕴️💢', characterName, selectedCharacter);
    selectedCharacter.currentHp -= 1
    console.log(selectedCharacter);
  }
}

export const charactersService = new CharactersService()