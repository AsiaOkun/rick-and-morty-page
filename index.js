import { CharactersView } from './src/charactersView.js';
import { sortByDateAsc, sortByDateDesc, sortByEpisodesAsc, sortByEpisodesDesc} from './src/sorting.js';
import { trackScroll, hideCards} from './src/cardDisplay.js';
import './style.css'

const url = 'https://rickandmortyapi.com/api/character';

document.querySelector('button#sort-ep-asc').onclick = function () {
    sortByEpisodesAsc();
}
document.querySelector('button#sort-ep-desc').onclick = function () {
    sortByEpisodesDesc();
}
document.querySelector('button#sort-date-asc').onclick = function () {
    sortByDateAsc();
}
document.querySelector('button#sort-date-desc').onclick = function () {
    sortByDateDesc();
}
document.querySelector('button#display').onclick = function () {
    hideCards();
}

document.addEventListener("click", function(event) {
    if(event.target.matches('button.delete')) {
        const cardID = event.target.className.split(' ')[0];
        this.querySelector('.character.'+cardID).remove();
        if (this.querySelector("[style='display: none;']") !== null){
            this.querySelector("[style='display: none;']").style.display = '';
        }
    }
});

window.addEventListener('scroll', trackScroll);


function callApi(url) {
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            return data.results; // массив объектов
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
        });
};


class App {
    constructor() {
      this.startApp();
    }
  
    static rootElement = document.getElementById('root');
  
    async startApp() {
      try {
        
        const characters = await callApi(url);
        const charactersView = new CharactersView(characters);
        const charactersElement = charactersView.element;
        App.rootElement.appendChild(charactersElement);
        hideCards();
      } catch (error) {
        console.warn(error);
      } 
    }
}

new App();
