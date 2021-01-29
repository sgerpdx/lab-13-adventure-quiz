import quests from './quest-data.js';
import { findById, displayStats } from '../utils.js';


const USER = 'USER';
displayStats();

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('section img');
const form = document.querySelector('form');

const params = new URLSearchParams(window.location.search);
const questId = params.get('id');
const quest = findById(questId, quests);

img.src = `../assets/${quest.image}`;
img.width = '200';
h1.textContent = quest.title;
p.textContent = quest.description;



for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(span, radio);
    form.append(label);

}

const button = document.createElement('button');
button.textContent = 'Submit';
form.appendChild(button);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const selectionId = formData.get('choices');
    const choice = findById(selectionId, quest.choices);

    const user = JSON.parse(localStorage.getItem(USER));

    const span = document.getElementById('choice-result');
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

