<!-- src/routes/CharacterSelection.svelte -->
<script>
    import { onMount } from 'svelte';
    import {goto} from "$app/navigation";
    import {characters} from "../store.js";

    function gotoPlanets() {
      goto('/planets');
    }

    onMount(() => {
    });

</script>
  
  <h1>Character Selection</h1>
  <p>Please choose your character.</p>

  <ul>
  {#each $characters as char}
    <li>
      <span>{char.difficulty}</span>
      <button class="menu-button" on:click="{gotoPlanets}">{char.name}</button>
    </li>
  {/each}
  </ul>

<style>
  ul {
    margin:0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
    max-width: 500px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  li {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  span {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 16px;
  }
</style>