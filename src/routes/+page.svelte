<script>
  import humanizeDuration from 'humanize-duration'
  import '~/styles/app.scss'
  import { onInterval } from '~/utils/onInterval'
  import { pageTitle } from '~/utils/pageTitle'

  const WEDDING_DATE = new Date('2023-09-16T18:00:00-05:00')

  // local state variable
  let now = Date.now()

  // durations is derived from the local "now" state
  $: durations = humanizeDuration(+WEDDING_DATE - now, { round: true })
                  .split(/\s*,\s/)
                  .map(s => s.split(' '))

  // set up the interval on mount
  onInterval(() => now = Date.now())
</script>

<!-- HEAD -->
<svelte:head>
  <title>{pageTitle()}</title>
  <meta name="description" content="Aimee " />
</svelte:head>

<!-- MARKUP -->
<main>
  <h1>We've been married for:</h1>
  <h2>
    {#each durations as [value, units]}
      <span>
        <b>{value}</b>
        {units}
      </span>
    {/each}
  </h2>
</main>

<!-- STYLES -->
<style lang="scss">
  main {
    height: 75%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }

  h1 {
    font-weight: 200;
    text-align: center;
    color: rgba(0,0,50,0.3);
  }

  h2 {
    text-align: center;
    font-family: fancy;
    font-size: clamp(1rem, 6vw, 2rem);
    color: rgba(0,0,50,0.5);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    column-gap: 1em;
    row-gap: 0.5em;
  }

  span {
    display: flex;
    flex-flow: column;
  }

  b {
    font-size: 3em;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 100;
    letter-spacing: -0.05em;
    line-height: 0.6em;
    color: rgba(0,0,50,0.8);
  }
</style>
