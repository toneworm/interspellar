<!-- src/routes/CharacterSelection.svelte -->
<script>
    import {onMount} from 'svelte';
    import {planets, riddles} from "@store/store.js";
    import {page} from '$app/stores';

    function getPlanetFromUrl() {
        return $page.params.planet;
    }

    function getPlanetFromStore(name) {
        return $planets.filter(planet => planet.name === name)[0]
    }

    function getRiddlesForPlanet(name) {
        return $riddles.filter(riddle => riddle.planet === name)
    }

    const planetName = getPlanetFromUrl();
    const planet = getPlanetFromStore(planetName);
    const planetRiddles = getRiddlesForPlanet(planetName);

    onMount(() => {
    });

</script>

<h1>{planet.name}</h1>
<img src={planet.image} width="150px" height="150px" alt={planet.description} />
<p>{planet.description}</p>

<form action="">
{#each planetRiddles as {text}, index}
    <div class="riddle-container">
        <h2>Riddle {index + 1}</h2>
        <p>{text}</p>
        <label for="answer-{index}">Your answer:</label>
        <input type="text" id="answer-{index}" name="riddle-{index}">
    </div>
{/each}
    <button type="submit">Submit</button>
</form>

<style>
    h2 {
        font-size: 1.4rem;
        font-weight: 600;
        text-align: left;
    }
    p {
        text-align: left;
    }
    .riddle-container {
        text-align: left;
        margin-bottom: 32px;
    }

    .riddle-container:last-of-type {
        margin-bottom: 0;
    }
</style>