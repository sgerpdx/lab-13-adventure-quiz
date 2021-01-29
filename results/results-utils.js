const USER = 'USER';



export function physicalDescription(health) {

    if (health >= 40) {
        return 'good';
    } else if (health < 10) {
        return 'bad';
    } else {
        return 'neutral';
    }
}

export function financialDescription(bounty) {

    if (bounty >= 2000) {
        return 'good';
    } else if (bounty < 1000) {
        return 'bad';
    } else {
        return 'neutral';
    }
}


export function clearStats() {
    const user = JSON.parse(localStorage.getItem(USER));

    //const defaultHealth = user.health;
    //const defaultBounty = user.bounty;
    //console.log(defaultBounty);
    //console.log(defaultHealth);

    user.health = 50;
    user.bounty = 0;

    const stringyDefaultStats = JSON.stringify(user);
    //const stringyDefaultBounty = JSON.stringify(user.bounty);
    localStorage.setItem(USER, stringyDefaultStats);
    //localStorage.setItem(USER, stringyDefaultBounty);


}
