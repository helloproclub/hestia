<script>
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
  <title>
    Proclub Telkom University
  </title>
</svelte:head>

<template>
  <div class="page">
    <img src="svg/undraw-code-typing.svg" alt/>
    <div class="status">
      <h1>Coming Soon</h1>
      <p>
        We are preparing something amazing.
        Make sure to be back on October!
      </p>
    </div>
  </div>
</template>
