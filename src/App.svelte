<script>
	export let name;
	let lastName = 'Brito'
	let color = 'blue'

	$: fullName = name + ' ' + lastName

	$: document.title = fullName

	$: {
		console.log(`the current title is ${fullName}`);
	}

	let people = ['Jake', 'Diego', 'Monica', 'Mayk']

</script>


<main>
	<h1>Hello <span style="color: {color}">{fullName}</span>!</h1>
	{#if color === 'blue'}
		<p>color is blue</p>
	{:else}
		<p>color is red</p>
	{/if}
	<button on:click={() => color = color === 'blue' ? 'red' : 'blue'}>Toggle</button>
	{#each people as person }
		<h4>{person}</h4>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>