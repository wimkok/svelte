<script context="module" lang="ts">
	export const prerender = true;


</script>

<script lang="ts">

import Counter from '$lib/Counter.svelte';

export let name = 'Default name';
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


<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />

	<h1>Hello {name}!</h1>

</section>

<p>My variabel = {myvar}</p>
<p><textarea value={text} on:keydown={handleKeydown}></textarea></p>
<p><textarea value={output} on:keydown={handleKeydown}></textarea></p>

<style>
	textarea {
		width: 100%;
		height: 200px;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
