// src/js/game-state.js

import generateRandomColor from './generate-random-color.js'

export default class GameState {
  constructor () {
    this.balls = []
    this.width = 300
    this.height = 300
  }
  addBall () {
    const maxSpeed = 300

    const ball = {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      dx: (Math.random() * maxSpeed) - (maxSpeed / 2),
      dy: (Math.random() * maxSpeed) - (maxSpeed / 2),
      width: 10,
      color: generateRandomColor()
    }

    this.balls.push(ball)
  }
}
