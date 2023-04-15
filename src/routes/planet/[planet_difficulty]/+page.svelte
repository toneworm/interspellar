<!-- src/routes/CharacterSelection.svelte -->
<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import { planets, riddles, game } from "@store/store.js";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  function gotoPlanets() {
    goto("/planets");
  }

  function getPlanetFromStore(name) {
    return $planets.filter((planet) => planet.name === name)[0];
  }

  function getRiddlesForPlanet(name) {
    return $riddles.filter((riddle) => riddle.planet === name);
  }

  const planetName = $page.params.planet_difficulty.split("_")[0];
  const difficulty = $page.params.planet_difficulty.split("_")[1];
  const planet = getPlanetFromStore(planetName);
  const planetRiddles = getRiddlesForPlanet(planetName);

  function handleSubmit(event) {
    const data = new FormData(event.target);
    data.forEach((riddleAnswer, index) => {
      if (planetRiddles[index].answer === riddleAnswer.toLowerCase()) {
        $game.riddleComplete[planetName][difficulty][index] = true;
      }
    });
  }

  onMount(() => {});
</script>

<h1>{planet.name}</h1>
<img src={planet.image} width="150px" height="150px" alt={planet.description} />
<p class="text-left">{planet.description}</p>

<form on:submit|preventDefault={handleSubmit}>
  {#each planetRiddles as { text }, index}
    <div class="text-left mb-5">
      <h2 class="text-6 font-semibold text-left">Riddle {index + 1}</h2>
      <p class="text-left">{text}</p>
      <label for="answer-{index}">Your answer:</label>
      <input type="text" id="answer-{index}" name={index} />
      {#if $game.riddleComplete[planetName][difficulty][index]}
        <span>Fucking well done</span>
      {/if}
    </div>
  {/each}
  <button on:click={gotoPlanets} class="mr-8">Back</button>
  <button type="submit">Submit</button>
</form>
