<!-- src/routes/CharacterSelection.svelte -->
<script>
  import { onMount } from "svelte";
  import { planets, game } from "@store/store.js";
  import { goto } from "$app/navigation";

  const DIFFICULTY = 1;

  const completeStatusIcon =
    '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><path d="M7.7 404.6s115.2 129.7 138.2 182.7h99c41.5-126.7 202.7-429.1 341-535.1 28.5-36.8-43.4-52-101.4-27.6C397 61.3 232 341.8 201.2 409.2c-43.7 11.5-89.8-73.7-89.9-73.7z" fill="#6c4"/></svg>';
  const incompleteStatusIcon =
    '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 100 100"><path d="m6.4 6.4 87.2 87.2" style="fill:none;fill-rule:evenodd;stroke:red;stroke-width:18.05195999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/><path d="M6.4 93.6 93.8 6.4" style="fill:none;fill-rule:evenodd;stroke:red;stroke-width:17.80202103;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></svg>';

  const getPlanetComplete = (name, difficulty) => {
    console.log($game.planetComplete);
    return $game.planetComplete?.[name]?.[difficulty]
      ? completeStatusIcon
      : incompleteStatusIcon;
  };

  onMount(() => {});

  function gotoPlanet(name) {
    goto(`/planet/${name}_${DIFFICULTY}`);
  }
</script>

<h1>Planet Selection</h1>
<p>Choose a planet. All planets must be completed to continue.</p>
<ul class="ma p-0 indent-0 list-none flex justify-between max-w-xl">
  {#each $planets as { name, image, description }}
    <li class="flex justify-between flex-col items-center grow-0 shrink-0">
      <p class="weight-6 text-5 font-semibold">{name}</p>
      <a on:click={gotoPlanet(name)}>
        <img src={image} width="150px" height="150px" alt={description} />
      </a>
      <div class="flex flex-col items-center text-3 gap-2">
        <span>Status</span>
        {@html getPlanetComplete(name, DIFFICULTY)}
      </div>
    </li>
  {/each}
</ul>
