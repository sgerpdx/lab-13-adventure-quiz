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

    const user = {
        name: 'uknown',
        armor: 'unchosen',
        health: 50,
        bounty: 0,
        completed: {},
    };

    const stringyDefaultStats = JSON.stringify(user);
    localStorage.setItem(USER, stringyDefaultStats);

}

