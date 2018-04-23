// src/js/render.js

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

export default function render (state) {
  ctx.clearRect(0, 0, state.width, state.height)

  for (const ball of state.balls) {
    ctx.fillStyle = ball.color
    ctx.fillRect(parseInt(ball.x), parseInt(ball.y), ball.width, ball.width)
  }

  for (const block of state.blocks) {
    ctx.fillStyle = 'black'
    ctx.fillRect(parseInt(block.x), parseInt(block.y), block.width, block.width)
  }
}
