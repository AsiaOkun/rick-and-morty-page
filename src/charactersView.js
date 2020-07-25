import { CharacterView } from './characterView.js'
import { View } from './View.js'

export class CharactersView extends View {
    constructor(characters) {          // получаем массив объектов (персонажи)
        super();
        this.createCharacters(characters);
    }
  
    // charactersDetailsMap = new Map();
  
    createCharacters(characters) {
        console.log(characters);
        const characterElements = characters.map(character => {
        const characterView = new CharacterView(character);
        return characterView.element;
      });
  
      this.element = this.createElement({ tagName: 'div', className: 'characters', });
      this.element.setAttribute('id', 'characters' )
      this.element.append(...characterElements);
    }
}
