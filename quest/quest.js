import quests from './quest-data.js';
import { findById, displayStats } from '../utils.js';



//these are the DOM elements to populate with quest-specific material:
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('section img');
const form = document.querySelector('form');


const USER = 'USER';
displayStats();

//this obtains the quest id from the end of the URL:
const params = new URLSearchParams(window.location.search);
const questId = params.get('id');
const quest = findById(questId, quests);

//and here the DOM elements are populated per the quest data:
h1.textContent = quest.title;

p.textContent = quest.description;
img.src = `../assets/${quest.image}`;


for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    //the quest data supplies the scanrio description:
    span.textContent = choice.description;

    //here the loop comes into play, as each choice has a radio button rendered:
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    //description and button go into label:
    label.append(span, radio);
    //and label goes into form:
    form.append(label);

}

//see below for details on button's EL...
const button = document.createElement('button');
button.textContent = 'Submit';
form.appendChild(button);

//this event listener looks at the data, determines which choice, retrieves user object from locStore,
//updates health and bounty, marks quest as complete, pushes back to locStore, sends user back to map;
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const selectionId = formData.get('choices');
    const choice = findById(selectionId, quest.choices);
    //because "choices" is the name of the radio button (line 35).

    const user = JSON.parse(localStorage.getItem(USER));

    //alert(choice.result);
    const span = document.querySelector('span');
    span.textContent = choice.result;


    user.health = user.health + choice.health;
    user.bounty = user.bounty + choice.bounty;
    user.completed[questId] = true;

    localStorage.setItem('USER', JSON.stringify(user));


});


const mapButton = document.getElementById('return');

mapButton.addEventListener('click', (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem(USER));
    const physicalCondition = user.health;




    if (physicalCondition <= 0) {
        window.location = '../results/index.html';
    } else {
        window.location = '../map/index.html';
    }

});