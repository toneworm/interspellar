import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import * as fs from "fs";

dotenv.config();
const planets = ["Millers", "Manns", "Edmunds"];
const questionsMap = new Map();
const content =

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateQuestionForPlanet(planetName) {
  try {
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write 5 facts about ${planetName} planet in the film Interstellar. Add a sixth fact but make it a lie. Do not explain that you have lied.`,
      max_tokens: 150,
      temperature: 0.8,
    });
    return response.data.choices[0].text?.toString().trim().split("\n");
  } catch (error) {
    console.error(error.response.data.error);
  }
}

const planetPromises = planets.map((planet) => {
  return generateQuestionForPlanet(planet);
});

Promise.all(planetPromises).then((values) => {
  console.log(values);
  
});

// fs.writeFile("../store/output.json", content, (err) => {
//   if (err) {
//     console.error(err);
//   }
// });
