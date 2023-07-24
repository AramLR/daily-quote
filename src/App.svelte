<script lang="ts">
  import { getDailyQuote } from './lib/api'
</script>

<svelte:head>
  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
  />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin=""
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{#await getDailyQuote()}
  <p id="loading">
    Loading...
  </p>
{:then { quote, author }}
  <div id="quoteBlock">
    <p id="quote">
      {quote}
    </p>
    <p id="author">
      {author}
    </p>
  </div>
{/await}

<style>
</style>
