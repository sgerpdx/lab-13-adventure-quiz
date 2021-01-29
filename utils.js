export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}


export function displayStats() {

    const USER = 'USER';

    const hSpan = document.getElementById('player-health');
    const cSpan = document.getElementById('player-credits');

    const user = JSON.parse(localStorage.getItem(USER));

    hSpan.textContent = `health: ${user.health}`;
    cSpan.textContent = `credits: ${user.bounty}`;

}

//the output of this function is a couple of *strings* e.g. :
//   health: 20
//   credits: 1000

