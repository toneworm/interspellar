<!-- src/routes/CharacterSelection.svelte -->
<script>
    import {onMount} from 'svelte';
    import {planets, riddles, game} from "@store/store.js";
    import {page} from '$app/stores';

    function getPlanetFromUrl() {
        return $page.params.planet_difficulty.split('_')[0];
    }

    function getDifficultyFromUrl() {
        return $page.params.planet_difficulty.split('_')[1];
    }

    function getPlanetFromStore(name) {
        return $planets.filter(planet => planet.name === name)[0]
    }

    function getRiddlesForPlanet(name) {
        return $riddles.filter(riddle => riddle.planet === name)
    }

    const planetName = getPlanetFromUrl();
    const difficulty = getDifficultyFromUrl();
    const planet = getPlanetFromStore(planetName);
    const planetRiddles = getRiddlesForPlanet(planetName);

    function addSuccessHtml(element) {
        const successHtml = document.createElement('span');
        successHtml.textContent = 'Correct';
        element.parentNode.appendChild(successHtml);
    }

    function handleInput(event) {
        const input = event.target;
        if (planetRiddles[input.dataset.index].answer === input.value.toLowerCase()) {
            $game.riddleComplete[planetName][difficulty][input.dataset.index] = true;
            addSuccessHtml(input);
        }
    }

    onMount(() => {
    });

</script>

<h1>{planet.name}</h1>
<img src={planet.image} width="150px" height="150px" alt={planet.description} />
<p>{planet.description}</p>

<form on:submit|preventDefault>
{#each planetRiddles as {text}, index}
    <div class="riddle-container">
        <h2>Riddle {index + 1}</h2>
        <p>{text}</p>
        <label for="answer-{index}">Your answer:</label>
        <input on:blur={handleInput} type="text" id="answer-{index}" data-index="{index}">
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