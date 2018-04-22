// src/js/render.js

const canvas = document.getElementById('canvas')

export default function render () {
  const ctx = canvas.getContext('2d')
  ctx.fillRect(0, 0, 75, 75)
}
