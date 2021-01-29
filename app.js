const form = document.querySelector('form');
import { displayStats } from './utils.js';

displayStats();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        armor: formData.get('armor'),
        health: 50,
        bounty: 0,
        completed: {},

    };

    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);

    window.location = './map';
});

