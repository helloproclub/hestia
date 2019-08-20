<script>
	import { onMount } from 'svelte';

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';

	onMount(() => {
		if (dev && error.stack) {
			console.log(error.stack);
		}
	});
</script>

<style lang="scss">
	.page {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 100vh;

    img {
      margin-right: 32px;
      width: 300px;
    }

    .status {
      margin-left: 32px;

			h1 {
				font-family: 'Quicksand', sans-serif;
				font-size: 32pt;
			}

			p {
				font-family: 'Roboto', sans-serif;
				font-size: 12pt;
				text-align: justify;
				width: 240px;
			}

			a {
				color: #222;
				text-decoration: underline;

				&:hover {
					text-decoration: none;
				}
			}
    }
  }

  @media only screen and (max-width: 720px) {
    .page {
      flex-direction: column;

      img {
        margin-bottom: 32px;
        margin-right: 0;
      }

      .status {
        margin-left: 0;
        margin-top: 32px;

				h1 {
					text-align: center;
				}
      }
    }
  }
</style>

<svelte:head>
	<title>Oops! We got {status}!</title>
</svelte:head>

<template>
	<div class="page">
		{#if status === 404}
			<img src="svg/undraw-page-not-found.svg" alt/>
			<div class="status">
				<h1>Not Found</h1>
				<p>
					Well, you see, the page you are looking for is not there.
					Let's going back to <a href="/">home</a>!
				</p>
			</div>
		{:else}
			<img src="svg/undraw-feeling-blue.svg" alt/>
			<div class="status">
				<h1>Got {status}</h1>
				<p>
					{error.message}.<br/>
					There is nothing we can do about this.
					Actually, we are in the way for fixing this!
				</p>
			</div>
		{/if}
	</div>
</template>
<!-- <h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if} -->
