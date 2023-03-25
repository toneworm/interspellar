<!-- src/routes/CharacterSelection.svelte -->
<script>
    import {onMount} from 'svelte';
    import {planets, game} from "../store.js";
    import {page} from '$app/stores';

    function getPlanetFromUrl() {
        return $page.url.searchParams.get('planet');
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