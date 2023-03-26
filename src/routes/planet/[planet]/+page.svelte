<!-- src/routes/CharacterSelection.svelte -->
<script>
    import {onMount} from 'svelte';
    import {planets} from "@store/store.js";
    import {page} from '$app/stores';

    function getPlanetFromUrl() {
        return $page.params.planet;
    }

    function getPlanetFromStore(name) {
        return $planets.filter(planet => planet.name === name)[0]
    }

    const planet = getPlanetFromStore(getPlanetFromUrl());

    onMount(() => {
    });

</script>

<h1>Planet: {planet.name}</h1>
<p>{planet.description}</p>

<style>

</style>