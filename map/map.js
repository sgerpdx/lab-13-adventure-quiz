import quests from '../quest/quest-data.js';
import { displayStats } from '../utils.js';


displayStats();

const ul = document.querySelector('ul');
const user = JSON.parse(localStorage.getItem('USER'));

let completedAllQuests = true;

for (let quest of quests) {
    if (!user.completed[quest.id]) {

        completedAllQuests = false;
    }
}


if (user.hp <= 0 || completedAllQuests) {
    window.location = '../results';
}


for (let quest of quests) {
    const questLocation = quest.map;

    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.textContent = quest.title;
    a.href = `../quest/?id=${quest.id}`;

    li.style.position = 'absolute';
    li.style.top = questLocation.top;
    li.style.left = questLocation.left;

    img.src = `../assets/${quest.image}`;
    img.width = 80;
    img.title = quest.id;

    a.append(img);
    li.append(a);
    ul.append(li);
}

