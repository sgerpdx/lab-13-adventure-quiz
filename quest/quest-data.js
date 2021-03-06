const iceCave = {
    id: 'icecave',
    title: 'The Ice Cave',
    map: {
        top: '50%',
        left: '0%'
    },
    image: 'cave-blue-ice.jpg',
    description: `
        Carefull of your footing, you turn on your helmet lamp and proceed around 
        several turns. Suddenly, you hear the brush of heavy footpads behind you. 
        As you turn to look, you are hit by the paw of a wampa, a fearsome ice beast. 
        Thrown against a wall of solid blue ice, you struggle back to your feet, dazed. What to do?
    `,
    choices: [{
        id: 'run-in',
        description: 'Run farther into the cave',
        result: `
            Gathering yourself, you dash past the wampa, moving deeper into the dark cave. Your
            helmet lamp is flickering, and you don't see the body hanging upside down from the
            roof of the cave until you run into it. The fugitive is dead, but you are able to
            melt the ice and free the body. However, in leaving the cave, the wampa rips the body
            in two and you emerge with only half. This matters, because your employer pro-rates
            these things. 
        `,
        health: -15,
        bounty: 250
    }, {
        id: 'confront',
        description: 'Engage the creature in combat',
        result: `
            Reaching for your beskar knife, you meet the wampa in hand-to-paw combat. It siezes
            you in its powerful arms and you can feel your ribs straining. Eventually, you stab
            a soft spot in its fur, and it drops you. You back away and draw your blaster, shooting
            to kill. Though aching, you venture deeper into the dave and find the dead body of the
            fugitive; they weren't so lucky.
        `,
        health: -30,
        bounty: 500
    }, {
        id: 'run-out',
        description: 'Run back out of the cave',
        result: `
            You turn and get out of the cave as fast as possible. The wampa does not appear to
            have followed you, and you have only superficial damage to your armor, but now you
            have no hope of catching the fugitive in this cave.
        `,
        health: -10,
        bounty: 0
    }]
};


const lichenCave = {
    id: 'lichen-cave',
    title: 'The Lichen Cave',
    map: {
        top: '80%',
        left: '100%'
    },
    image: 'cave-winter-lichen.jpg',
    description: `
        Entering this cave, you see the tracks of what look like large lizards. Cautious, you draw your blaster
        but find that this cave is home to a herd of tauntaun, large but docile beasts. They are
        grazing on the lichen. They look up uncertainly as you approach them from around a corner. Using your
        helmet's visual scanner, you detect a lone humanoid hiding among them--the fugitive. What do you do?
    `,
    choices: [{
        id: 'feed',
        description: 'Feed the tauntaun some of the lichen from near the cave entrance',
        result: `
            Because they are wary of predators, the tauntaun do not often venture to the cave mouth.
            They are grateful to you for the high-quality lichen that you picked there. One tauntaun
            befriends you and allows you to ride it. Doing so, you catch the fugigive quickly, and alive.
        `,
        health: -5,
        bounty: 750
    }, {
        id: 'blaster',
        description: 'Pull your blaster as protection from stampedes',
        result: `
            These tauntaun must have been hunted before, because they recognize your blaster and begin
            to stampede. In the process, you are lightly trampled, and your quary is heavily trampled,
            fatally killed. Eventually, you scare the tauntaun off with blaster shots and, though injured,
            retrieve the fugitive's body.
        `,
        health: -35,
        bounty: 250
    }, {
        id: 'approach',
        description: 'Attempt to walk among the herd toward the fugitive',
        result: `
            You calmly, slowly walk toward the group of tauntaun. However, before you can move through them, one is
            spooked and they run amok. You are knocked down and in the confusion, the fugitive flees after
            the creatures into the dark. After hours of searching, you conclude that you will freeze to death
            yourself, and you abandon the search.
        `,
        health: -25,
        bounty: 0
    }]
};

const bigCave = {
    id: 'big-cave',
    title: 'The Large Cave',
    map: {
        top: '100%',
        left: '50%'
    },
    image: 'cave-large-mouth.jpg',
    description: `
        This is a truly massive cave, with immense snow drifts up the walls and a roof too high to see in the 
        low light. You crack open a glowing-green light stick and toss it up as far as you can. As it comes down, you catch
        sight of something moving on the far side of the cave: the fugitive! You turn your helmet lamp to max and run in
        that direction. A burst of sound and light reveals that the fugitive has shot up at the ceiling with
        their blaster. A giant icicle falls, triggering an small avalanche and blocking the way. What do you do?
    `,
    choices: [{
        id: 'melt',
        description: 'Use your flamethrower to melt the snow',
        result: `
            Powering up the flamethrower mounted on your gauntlet, you begin using it to melt the snow and ice
            to clear the way. This goes fine at first, but then a great cracking echoes through the cave and the
            ground in front of you collapses. You use your jetpack to avoid falling into the new crevasse, but
            the fugitive falls to their death. You are able to use a rope and hook to retrieve their body.
        `,
        health: -10,
        bounty: 500
    }, {
        id: 'dig',
        description: 'Dig through the snow and ice by hand',
        result: `
            You decide not to use your flamethrower, concerned for the structural integrity of the cave. Instead,
            you use a small multi-tool to painstakingly dig through the obstructing snow and ice. Several hours
            later, you make it through and find your quary, nearly frozen but alive. You take them out of the cave.
        `,
        health: -45,
        bounty: 750
    }, {
        id: 'abandon',
        description: 'You decide that it is not worth the effort and leave this cave',
        result: `
            Doubtful about the safety of this cave, you conclude that it will either take too much effort, and/or
            be too dangerous, to try and clear the obstructions. You write this fugitive off and leave the cave.
        `,
        health: 35,
        bounty: 0
    }]
};

const quests = [
    iceCave,
    lichenCave,
    bigCave,
];

export default quests;

