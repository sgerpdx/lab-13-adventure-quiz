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

    let user = JSON.parse(localStorage.getItem(USER));

    if (!user) {
        user = {
            health: 50,
            bounty: 0,
        };
    }

    hSpan.textContent = `health: ${user.health}`;
    cSpan.textContent = `credits: ${user.bounty}`;

}


