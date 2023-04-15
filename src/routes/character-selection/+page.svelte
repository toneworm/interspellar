<!-- src/routes/CharacterSelection.svelte -->
<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { characters, game } from "@store/store.js";

  function gotoPlanets(character) {
    $game.character = character;
    goto("/planets");
  }

  onMount(() => {});
</script>

<h1>Character Selection</h1>
<p>Please choose your character.</p>

<ul class="ma p-0 indent-0 list-none flex justify-between max-w-md">
  {#each $characters as char}
    <li class="flex justify-between flex-col">
      <span class="text-5 font-semibold mb-3">{char.difficulty}</span>
      <button on:click={gotoPlanets(char.name)}>{char.name}</button>
    </li>
  {/each}
</ul>
