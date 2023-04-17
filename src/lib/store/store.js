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
    description:
      "Miller's planet is a water world near a black hole in the film \"Interstellar.\" It has extreme time dilation, where every hour spent on the planet's surface equals seven years passing on Earth. The planet was previously explored by a NASA astronaut named Dr. Miller, who discovered signs of life and sent a beacon signal to Earth before being killed by a massive tidal wave.",
  },
  {
    name: "Manns Planet",
    image: "/src/lib/images/frozen_planet.png",
    description:
      'Mann\'s planet is a frozen world in "Interstellar," named after Dr. Mann, who betrayed the crew. The planet was initially believed to be a potential new home for humanity but was ultimately found to be inhospitable due to high ammonia levels in the atmosphere.',
  },
  {
    name: "Edmunds Planet",
    image: "/src/lib/images/rocky_planet.png",
    description:
      'Edmunds planet is a potentially habitable planet in "Interstellar" named after Dr. Edmunds, one of the twelve astronauts who explored it. It was initially believed to be a promising new home for humanity, but it was later revealed to be uninhabitable due to massive tidal waves caused by its proximity to a black hole.',
  },
]);

export const questions = readable([
  {
    text: "I am four letters long, I can be seen in the sky, I am the ocean & I am the sea. Can you guess me?",
    planet: "Millers Planet",
    answer: "blue",
  },
  {
    text: "Riddle my diddle but dont fiddle yo",
    planet: "Millers Planet",
    answer: "shiddle",
  },
]);

export const game = writable({
  character: "",
  planetComplete: {
    "Millers Planet": [false, false, false],
    "Edmunds Planet": [false, false, false],
    "Manns Planet": [false, false, false],
  },
  riddleComplete: {
    "Millers Planet": [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ],
    "Edmunds Planet": [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ],
    "Manns Planet": [
      [false, false, false],
      [false, false, false],
      [false, false, false],
    ],
  },
});
