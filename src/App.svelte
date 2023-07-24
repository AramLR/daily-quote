<script lang="ts">
  import App from './App.svelte'
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
  #quoteBlock {
    margin: 20px;
  }

  #quote,
  #author,
  #loading {
    font-size: 2em;
    font-weight: 1000;
  }

  #author::before {
    content: '- ';
  }

  #quote {
    font-style: italic;
  }

  #quote::before {
    content: '"';
  }

  #quote::after {
    content: '"';
  }
</style>
