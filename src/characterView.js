import { View } from './View.js'

export class CharacterView extends View {
    constructor(character) {
      super();
  
      this.createCharacter(character);
    }

    createCharacter(character) {

      const nameElement = this.createName(character.name);
      const imageElement = this.createImage(character.image);
      const speciesElement = this.createSpecies(character.species);
      const locationElement = this.createLocation(character.location);
      const dateElement = this.createDate(character.created);
      const episodeElement = this.createEpisode(character.episode);
      const deleteButton = this.createDeleteButton(character.id);
  
      this.element = this.createElement({ tagName: 'div', className: 'character'});
      this.element.classList.add('pers'+character.id);
      this.element.append(imageElement, nameElement, speciesElement, locationElement, dateElement, episodeElement, deleteButton);
    }
  
    createName(name) {
      const nameElement = this.createElement({ tagName: 'span', className: 'name' });
      nameElement.innerText = name;
  
      return nameElement;
    }
  
    createImage(image) {
      const attributes = { src: image };
      const imgElement = this.createElement({
        tagName: 'img',
        className: 'character-image',
        attributes
      });
  
      return imgElement;
    }

    createSpecies(species) {
        const speciesElement = this.createElement({ tagName: 'span', className: 'species' });
        speciesElement.innerText = species;
    
        return speciesElement;
    }

    createLocation(location) {
        const locationElement = this.createElement({ tagName: 'span', className: 'location' });
        locationElement.innerText = location.name;

        return locationElement;
    }

    createDate(created) {
        const dateElement = this.createElement({ tagName: 'span', className: 'date' });
        dateElement.innerText = created.slice(0, 19).replace(/[A-Z]/g, ' ');

        return dateElement;
    }

    createEpisode(episode) {
        const episodeElement = this.createElement({ tagName: 'span', className: 'episode' });
        let text = '';
        for (let i = 0; i < episode.length; i++) {
            text = text + episode[i].slice(40) + ', ';
        }
        episodeElement.innerText = text.slice(0, text.length - 2);

        return episodeElement;
    }

    createDeleteButton(id) {
        const deleteButton = this.createElement({ tagName: 'button', className: 'pers'+id });
        deleteButton.classList.add('delete');
        deleteButton.innerText = 'Delete card';

        return deleteButton;
    }
}