import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

const planets = ["Millers", "Manns", "Edmunds"];

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateQuestionForPlanet(planetName) {
  try {
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      //   prompt: `Write a quiz question that has a single word answer that is related to the ${planetName} planet in the film Interstellar. Write it in the format of question and answer and make sure the answer output you give is a single word.`,
      prompt: `write 5 facts about ${planetName} planet in the film Interstellar. Number the facts in your response and be as concise as possible`,
      max_tokens: 100,
      temperature: 0,
    });
    console.log(response.data.choices);
  } catch (error) {
    console.error(error.response.data.error);
  }
}

planets.forEach((planet) => {
  generateQuestionForPlanet(planet);
});
