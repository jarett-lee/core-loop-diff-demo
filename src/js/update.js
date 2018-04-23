// src/js/update.js

export default function update (state, updateTime, updateDelta) {
  const ball = state.ball

  ball.x += ball.dx * (updateDelta / 1000)
  ball.y += ball.dy * (updateDelta / 1000)

  if (ball.x < 0) {
    ball.dx = Math.abs(ball.dx)
  }
  if (ball.x >= state.width - ball.width) {
    ball.dx = -Math.abs(ball.dx)
  }
  if (ball.y < 0) {
    ball.dy = Math.abs(ball.dy)
  }
  if (ball.y >= state.height - ball.width) {
    ball.dy = -Math.abs(ball.dy)
  }
}
