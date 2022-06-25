export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export const formatNumber = num => num > 9 ? String(num) : `0${num}`;