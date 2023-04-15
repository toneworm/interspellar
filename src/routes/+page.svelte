<!-- src/routes/+page.svelte -->
<script>
  import { goto } from "$app/navigation";

  function newGame() {
    goto("/character-selection");
  }

  function loadGame() {
    alert("Load game!");
  }
</script>

<div>
  <h1>Game Menu</h1>
  <button class="mr-8" on:click={newGame}>New Game</button>
  <button on:click={loadGame}>Load Game</button>
</div>
