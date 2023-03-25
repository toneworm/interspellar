<!-- src/routes/CharacterSelection.svelte -->
<script>
    import {onMount} from 'svelte';
    import {planets, game} from "../store.js";
    import {goto} from "$app/navigation";

    const completeStatusIcon = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><path d="M7.7 404.6s115.2 129.7 138.2 182.7h99c41.5-126.7 202.7-429.1 341-535.1 28.5-36.8-43.4-52-101.4-27.6C397 61.3 232 341.8 201.2 409.2c-43.7 11.5-89.8-73.7-89.9-73.7z" fill="#6c4"/></svg>';
    const incompleteStatusIcon = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 100 100"><path d="m6.4 6.4 87.2 87.2" style="fill:none;fill-rule:evenodd;stroke:red;stroke-width:18.05195999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/><path d="M6.4 93.6 93.8 6.4" style="fill:none;fill-rule:evenodd;stroke:red;stroke-width:17.80202103;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"/></svg>';

    function getPlanetImg(name) {
        if (name.includes('Millers')) {
            return '/src/lib/images/ocean_planet.png';
        }

        if (name.includes('Manns')) {
            return '/src/lib/images/frozen_planet.png';
        }

        if (name.includes('Edmunds')) {
            return '/src/lib/images/rocky_planet.png';
        }
    }

    function getStatusIcon(name) {
        if (name.includes('Millers')) {
            return $game.planetMillersComplete ? completeStatusIcon : incompleteStatusIcon;
        }

        if (name.includes('Manns')) {
            return $game.planetMannsComplete ? completeStatusIcon : incompleteStatusIcon;
        }

        if (name.includes('Edmunds')) {
            return $game.planetEdmundsComplete ? completeStatusIcon : incompleteStatusIcon;
        }
    }

    onMount(() => {
    });

    function gotoPlanet() {
        goto('/planet');
    }

</script>

<h1>Planet Selection</h1>
<p>Choose a planet. All planets must be completed to continue.</p>

<ul>
    {#each $planets as planet}
        <li>
            <p class="planet-name">{planet.name}</p>
            <a on:click="{gotoPlanet}"><img src="{getPlanetImg(planet.name)}" width="150px" height="150px" alt="planet"></a>
            <div class="status-container">
                <span>Status</span>
                {@html getStatusIcon(planet.name)}
            </div>
        </li>
    {/each}
</ul>

<style>
    ul {
        margin: 0;
        padding: 0;
        text-indent: 0;
        list-style-type: none;
        max-width: 460px;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    li {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
        flex: 0 0 30%;
    }

    .status-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 16px;
        font-size: 0.875rem;
        gap: 8px;
    }

    .planet-name {
      font-size: 1.2rem;
      font-weight: 600;
    }
</style>