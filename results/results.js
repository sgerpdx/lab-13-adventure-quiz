//html--results: display custom ending determined by by stats ([JS])
//
//note: stats will always display in header
//

//we want to basically load an 'epilogue statement' which will include...
//>>>pulling user hp and credits as of completion of quests...
//>>>a stock statement
//>>>textContent additions to stock statment determined by user hp/credits

//to do: create functions/variables to pull stats
//create variable for stock statement
//create if statement to tailor to stats

//have a 'play again' button that returns to home page



//import { findById } from '../utils.js';
import { healthFeedback, wealthFeedback } from './condition-arrays.js';

//const formData = new FormData(form);
//const selectionId = formData.get('choices');
//const choice = findById(selectionId, quest.choices);
const USER = 'USER';
const user = JSON.parse(localStorage.getItem(USER));


const h1 = document.querySelector('h1');
const p = document.querySelector('p');

//here go functions to return the physical and wealth states:

export function physicalDescription(hp) {

    if (hp >= 40) {
        return 'good';
    } else if (hp < 10) {
        return 'bad';
    } else {
        return 'neutral';
    }
}

export function financialDescription(credits) {

    if (credits >= 2000) {
        return 'good';
    } else if (credits < 1000) {
        return 'bad';
    } else {
        return 'neutral';
    }
}

const physicalState = physicalDescription(user.hp);
const wealthState = financialDescription(user.credits);

const physicalMessage = healthFeedback[physicalState];
const wealthMessage = wealthFeedback[wealthState];

const postScript = `${physicalMessage} and ${wealthMessage}, you return to your ship and prepare for takeoff...`;



h1.textContent = `Congratulations on surviving the hunt!`;
p.textContent = postScript;


const button = document.getElementById('replay');

button.addEventListener('click', () => {

    //clearRecord();
    window.location.href = '../index.html';

});






// function scoreHp(hp) {
//     if (hp <= 0) {
//         return 'dead';
//     }
//     if (hp < 35) {
//         return 'frail';
//     }
//     return 'healthy';
// }

// export default scoreHp;




// function scoreGold(gold) {
//     if (gold === 0) {
//         return 'poor';
//     }
//     else if (gold < 50) {
//         return 'modest';
//     }
//     return 'rich';
// }

// export default scoreGold;