import {readable, writable} from "svelte/store";
import {edmundsPlanetSvg} from './planets/edmunds-planet.js';
import {mannsPlanetSvg} from './planets/manns-planet.js';
import {millersPlanetSvg} from './planets/millers-planet.js';

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
        image: millersPlanetSvg,
    },
    {
        name: 'Manns Planet',
        image: mannsPlanetSvg,
    },
    {
        name: 'Edmunds Planet',
        image: edmundsPlanetSvg,
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
        planetMillersComplete: true,
        planetMannsComplete: false,
        planetEdmundsComplete: false,
    }
);