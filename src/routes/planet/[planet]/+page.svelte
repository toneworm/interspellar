<!-- src/routes/CharacterSelection.svelte -->
<script>
    import {onMount} from 'svelte';
    import {planets, game} from "@store/store.js";
    import {page} from '$app/stores';

    console.log($page)

    function getPlanetFromUrl() {
        return $page.params.planet;
    }

    function getPlanetDescripton() {
        const planetFromUrl  = getPlanetFromUrl()
        let description;
        $planets.forEach(planet => {
            if (planet.name.includes(planetFromUrl)) {
                description = planet.description;
            }
        })
        return description;
    }

    onMount(() => {
    });

</script>

<h1>Planet: {$game.currentPlanetInFocus}</h1>
<p>{getPlanetDescripton()}</p>

<style>

</style>