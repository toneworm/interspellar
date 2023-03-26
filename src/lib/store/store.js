import { readable, writable } from "svelte/store";

export const characters = readable([
  {
    name: "Amelia",
    difficulty: "Easy",
  },
  {
    name: "Murph",
    difficulty: "Normal",
  },
  {
    name: "Cooper",
    difficulty: "Hard",
  },
]);

export const planets = readable([
  {
    name: "Millers Planet",
    image: "/src/lib/images/ocean_planet.png",
    description: "millers description",
  },
  {
    name: "Manns Planet",
    image: "/src/lib/images/frozen_planet.png",
    description: "manns description",
  },
  {
    name: "Edmunds Planet",
    image: "/src/lib/images/rocky_planet.png",
    description: "edmunds description",
  },
]);

export const riddles = readable([
  {
    text: "I am four letters long, I can be seen in the sky, I am the ocean & I am the sea. Can you guess me?",
    planet: "Millers Planet",
  },
  {
    text: "Riddle my diddle but dont fiddle yo",
    planet: "Millers Planet",
  },
]);

export const game = writable({
  character: "",
  planetComplete: {
    "Millers Planet": [true, false, false],
    "Edmunds Planet": [true, true, false],
    "Manns Planet": [true, false, true],
  },
  riddlesComplete: {
    "Millers Planet": [true, false, false],
    "Edmunds Planet": [false, false, false],
    "Manns Planet": [false, false, false],
  },
});
