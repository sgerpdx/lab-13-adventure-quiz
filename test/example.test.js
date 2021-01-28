//import { findById } from '../utils.js';
//import quests from '../quest/quest-data.js';
import { physicalDescription, financialDescription } from '../results/results-utils.js';


const test = QUnit.test;

// Test for findById function:

// test('This test should take in the unique quest id icecave and the array quests and return the object for the iceCave quest', (assert) => {

//     const expected = {
//         id: 'icecave',
//         title: 'Deep Blue Ice',
//         map: {
//             top: '25%',
//             left: '15%'
//         },
//         image: 'alchemy-logo.png',
//         description: `
//             Carefull of your footing, you turn on your helmet lamp and proceed around 
//             several turns. Suddenly, you hear the brush of heavy footpads behind you. 
//             As you turn to look, you are hit by the paw of a wampa, a fearsome ice beast. 
//             Thrown against a wall of blue ice, you struggle back to your feet, dazed. What to do?
//         `,
//         choices: [{
//             id: 'run-in',
//             description: 'Run farther into the cave',
//             result: `
//                 Gathering yourself, you dash past the wampa, moving deeper into the dark cave. Your
//                 helmet lamp is flickering, and you don't see the body hanging upside down from the
//                 roof of the cave until you run into it. The fugitive is dead, but you are able to
//                 melt the ice and free the body. However, in leaving the cave, the wampa rips the body
//                 in two and you emerge with only half. This matters, because your employer pro-rates
//                 these things. 
//             `,
//             hp: -15,
//             credits: 250
//         }, {
//             id: 'confront',
//             description: 'Engage the creature in combat',
//             result: `
//                 Reaching for a beskar knife, you meet the wampa in hand-to-paw combat. It siezes
//                 you in its powerful arms and you can feel your ribs straining. Eventually, you stab
//                 a soft spot in its fur, and it drops you. You back up and draw your blaster, shooting
//                 to kill. Though aching, you venture deeper into the dave and find the dead body of the
//                 fugitive; they weren't so lucky.
//             `,
//             hp: -30,
//             credits: 500
//         }, {
//             id: 'run-out',
//             description: 'Run back out of the cave',
//             result: `
//                 You turn and get out of the cave as fast as possible. The wampa does not appear to
//                 have followed you, and you have only superficial damage to your armor, but now you
//                 have no hope of catching the fugitive in this cave.
//             `,
//             hp: -10,
//             credits: 0
//         }]
//     };


//     const actual = findById('icecave', quests);

//     assert.deepEqual(actual, expected);
// });



// Tests for physicalDescription function:

test('This test should take in a value of 41 for hp and return good', (assert) => {

    const expected = 'good';

    const actual = physicalDescription(41);

    assert.equal(actual, expected);
});



test('This test should take in a value of 8 for hp and return bad', (assert) => {

    const expected = 'bad';

    const actual = physicalDescription(8);

    assert.equal(actual, expected);
});


test('This test should take in a value of 27 for hp and return neutral', (assert) => {

    const expected = 'neutral';

    const actual = physicalDescription(27);

    assert.equal(actual, expected);
});


// Tests for financialDescription function:

test('This test should take in a value of 1500 for hp and return neutral', (assert) => {

    const expected = 'neutral';

    const actual = financialDescription(1500);

    assert.equal(actual, expected);
});

test('This test should take in a value of 30 for hp and return bad', (assert) => {

    const expected = 'bad';

    const actual = financialDescription(30);

    assert.equal(actual, expected);
});


test('This test should take in a value of 2100 for hp and return good', (assert) => {

    const expected = 'good';

    const actual = financialDescription(2100);

    assert.equal(actual, expected);
});



