import { AppState } from "../AppState.js";
import { Character } from "../models/Character.js";
import { charactersService } from "../services/CharactersService.js";




export class CharactersController{
  constructor(){
    // NOTE constructors typically run on page loade
    console.log('🧌loaded character controller');
    this.drawCharacter()
  }

  testFunction(){
    console.log('TEST SUCCESS!!💹');
  }

  // NOTE controller functions just take in the action that occurred and pass it to the service
  hurtCharacter(characterName){
    console.log('💢', characterName);
    charactersService.hurtCharacter(characterName)
    this.drawCharacter()
  }

  drawCharacter(){
    const characters = AppState.characters
    let content = '' // HTML content about to be rendered to the page
    characters.forEach(character => content += character.characterTemplate()) // add each individual template FROM the character class to the content
    // console.log('🗺️',content);
    document.getElementById('character-list').innerHTML = content // set the content to the page
  }

  addCharacter(){
    let newName = window.prompt('what is their name')
    let newRole = window.prompt('what is there role')
    charactersService.addCharacter(newName, newRole)
    this.drawCharacter()
  }
}