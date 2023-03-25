import {readable, writable} from "svelte/store";

export const characters = readable([
    {
        name: 'Amelia',
        difficulty: 'Easy',
    },
    {
        name: 'Murph',
        difficulty: 'Normal',
    },
    {
        name: 'Cooper',
        difficulty: 'Hard',
    }
]);

export const planets = readable([
    {
        name: 'Millers Planet',
        image: 'ocean_planet.png',
        description: 'millers description',
    },
    {
        name: 'Manns Planet',
        image: 'frozen_planet.png',
        description: 'manns description',
    },
    {
        name: 'Edmunds Planet',
        image: 'rocky_planet.png',
        description: 'edmunds description',
    },
]);

export const riddles = readable([
    {
        text: 'I am four letters long, I can be seen in the sky, I am the ocean & I am the sea. Can you guess me?',
        planet: 'Millers Planet',
    }, {
        text: 'Riddle my diddle but dont fiddle yo',
        planet: 'Millers Planet',
    }
]);

export const game = writable(
    {
        character: '',
        planetMillersComplete: false,
        planetMannsComplete: false,
        planetEdmundsComplete: false,
        currentPlanetInFocus: ''
    }
);