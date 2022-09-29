import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Wim and the world'
	}	
});
export let myvar = "Extra testje";

export default app;