<!-- src/routes/CharacterSelection.svelte -->
<script>
    import { onMount } from 'svelte';
    import {goto} from "$app/navigation";

    function gotoPlanets() {
      goto('/planets');
    }

    onMount(() => {
      console.log('CharacterSelection component mounted');
    });
  </script>
  
  <h1>Character Selection</h1>
  <p>Please choose your character.</p>
  <ul>
    <li>
        <span>Easy</span>
        <button class="menu-button" on:click="{gotoPlanets}">Amelia</button>
    </li>
    <li>
      <span>Normal</span>
      <button class="menu-button" on:click="{gotoPlanets}">Murph</button>
    </li>
    <li>
      <span>Hard</span>
      <button class="menu-button" on:click="{gotoPlanets}">Cooper</button>
    </li>
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

  button {
    min-width: 90px;
    background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    flex-shrink: 0;
    font-family: "Inter UI","SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    font-size: 16px;
    font-weight: 500;
    height: 2.4rem;
    padding: 0 .6rem;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
    transition: all .5s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  button:hover {
    box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
    transition-duration: .1s;
  }
</style>