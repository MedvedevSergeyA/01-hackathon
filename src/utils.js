export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}


export function formatTime(ms) {
  const sec = Number.parseFloat(ms / 1000).toFixed(2)
  return sec
}
