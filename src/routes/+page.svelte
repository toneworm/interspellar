<!-- src/routes/+page.svelte -->
<script>
    import { goto } from '$app/navigation';
  
    function newGame() {
      goto('/character-selection');
    }
  
    function loadGame() {
      alert('Load game!');
    }
  </script>
  
  <div class="menu-container">
    <h1>Game Menu</h1>
    <button class="menu-button" on:click="{newGame}">New Game</button>
    <button class="menu-button" on:click="{loadGame}">Load Game</button>
  </div>

<style>
  button:first-of-type {
    margin-right: 64px;
  }
</style>
