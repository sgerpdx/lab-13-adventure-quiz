import quests from '../quest/quest-data.js';

const ul = document.querySelector('ul');
const user = JSON.parse(localStorage.getItem('USER'));

let completedAllQuests = true;

console.log(user.completed);
for (let quest of quests) {
    if (!user.completed[quest.id]) {

        completedAllQuests = false;
    }
}


if (user.hp <= 0 || completedAllQuests) {
    window.location = '../results';
}


for (let quest of quests) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = quest.title;
    a.href = `./quest/?id=${quest.id}`;

    li.append(a);
    ul.append(li);
}
