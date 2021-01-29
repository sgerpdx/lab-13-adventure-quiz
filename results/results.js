import { healthFeedback, wealthFeedback } from './condition-arrays.js';
import { physicalDescription, financialDescription, clearStats } from './results-utils.js';
import { displayStats } from '../utils.js';


displayStats();

const USER = 'USER';
const user = JSON.parse(localStorage.getItem(USER));


const h1 = document.querySelector('h1');
const p = document.querySelector('p');



const physicalState = physicalDescription(user.health);
const wealthState = financialDescription(user.bounty);

const physicalMessage = healthFeedback[physicalState];
const wealthMessage = wealthFeedback[wealthState];

const postScript = `${physicalMessage} and ${wealthMessage}, you return to your ship and prepare for takeoff...`;


if (user.health <= 0) {
    h1.textContent = `Tragic outcome, that.`;
    p.textContent = `If you can read this, then you have become One with the Force. Congratulations on that, and better luck next time, just the same.`;
} else {
    h1.textContent = `Congratulations on surviving the hunt!`;
    p.textContent = postScript;
}




const button = document.getElementById('replay');
button.addEventListener('click', () => {

    clearStats();

    window.location.href = '../index.html';
});

