<script>
	export let name;
	export let myvar = "Test";

	import { tick } from 'svelte';

	let text = `Select some text and hit the tab key to toggle uppercase`;
	let output = `None`;

	async function handleKeydown(event) {
		if (event.key !== 'Tab') {
			output = 'Geen tab maar ' + event.key 
			return;
		}
		output = "Was een tab"
		
		event.preventDefault();

		const { selectionStart, selectionEnd, value } = this;
		const selection = value.slice(selectionStart, selectionEnd);

		const replacement = /[a-z]/.test(selection)
			? selection.toUpperCase()
			: selection.toLowerCase();

		text = (
			value.slice(0, selectionStart) +
			replacement +
			value.slice(selectionEnd)
		);

		await tick();
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>My variabel = {myvar}</p>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<textarea value={text} on:keydown={handleKeydown}></textarea><p/>
<textarea value={output} on:keydown={handleKeydown}></textarea>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	textarea {
		width: 100%;
		height: 200px;
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