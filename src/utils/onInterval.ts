import { onMount, onDestroy } from 'svelte'

type IntervalControls = {
  stop: () => void,
  start: () => void,
}

export const onInterval = (fn: Function, interval: number = 1000): IntervalControls => {
  let timer

  const start = () => {
    console.log('starting interval...')
    timer = setInterval(fn, interval)
  }

  const stop = () => {
    console.log('clearing interval...')
    clearTimeout(timer)
  }

  // autostart
  onMount(() => {
    fn()
    start()
  })

  // autostop
  onDestroy(stop)

  return { start, stop }
}
