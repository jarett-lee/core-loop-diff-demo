// src/js/render.js

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

export default function render (state) {
  const ball = state.ball

  ctx.clearRect(0, 0, state.width, state.height)

  ctx.fillRect(parseInt(ball.x), parseInt(ball.y), ball.width, ball.width)
  // ctx.fillRect(ball.x, ball.y, ball.width, ball.width)
}
