<script>
	import {v4 as uuidv4} from 'uuid'
	import {Feedback} from '../store'
	import Card from './Card.svelte'
	import Button from './Button.svelte';
	import RatingSelect from './RatingSelect.svelte';


	let text = ''
	let rating = 10
	let btnDisabled = true
	let min = 10
	let message

	const handleSelect = e => rating = e.detail

	const handleInput = () => {
		message = null
		btnDisabled = false
		
		if(text.trim().length <= min) {
				message = `Text must be at least ${min} characters`
				btnDisabled = true
		}
	}

	const handleSubmit = () => {
		if(text.trim().length > min) {
			const newFeedback = {
				id: uuidv4(),
				text,
				rating: +rating
			}

			Feedback.update((currentFeedback) => [newFeedback, ...currentFeedback])

			text = ''
			btnDisabled = true
		}
	}
</script>
  
  
<Card>
	<header>
		<h2>How would you rate your service with us?</h2>
	</header>
	<form on:submit|preventDefault={handleSubmit}>
		<RatingSelect on:rating-select={handleSelect} />
		<div class="input-group">
			<input type="text" on:input={handleInput} bind:value = {text} placeholder="Tell us something that keeps you coming back">
			<Button disabled={btnDisabled} type="submit">Send</Button>
		</div>
		{#if message}
			<div class="message">
					{message}
			</div>
		{/if}
	</form>
</Card>
  
<style>
	header {
		max-width: 40rem;
		margin: auto;
	}

	header h2 {
		font-size: 2.2rem;
		font-weight: 600;
		text-align: center;
	}

	.input-group {
		display: flex;
		flex-direction: row;
		border: .1rem solid #ccc;
		padding: .8rem 1rem;
		border-radius: .8rem;
		margin-top: 1.5rem;
	}

	input {
		flex-grow: 2;
		border: none;
		font-size: 1.6rem;
	}

	input:focus {
		outline: none;
	}

	.message{
		padding-top: 1rem;
		text-align: center;
		color: rebeccapurple;
	}
</style>