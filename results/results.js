import { healthFeedback, wealthFeedback } from './condition-arrays.js';
import { physicalDescription, financialDescription } from './results-utils.js';

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
    p.textContent = `If you can read this, then you have become one with the Force. Better luck next time.`;
} else {
    h1.textContent = `Congratulations on surviving the hunt!`;
    p.textContent = postScript;
}




const button = document.getElementById('replay');
button.addEventListener('click', () => {
    //clearRecord();
    window.location.href = '../index.html';
});

