<script>

    export let name;

    /**
     * @type {string[]}
     */
    export let items;

    let loading = true;

    fetch('http://api.github.com/users/diego3g/repos').then(response => response.json()).then(data => {
        items = data.map(repo => repo.name);
        loading = false
    })

function handleClick() {
    items = [...items, 'Novo']
}

</script>

<button on:click={handleClick} disabled={loading}>
    { name }
</button>

<ul>
    {#each items as item}   
        <li>{ item }</li>
    {/each}
</ul>

<style>
     button {
        background: black;
        color: white;
     }

     button:disabled {
        opacity: 0.5;
     }
</style>