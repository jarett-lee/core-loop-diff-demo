// src/js/game-state.js

export default class GameState {
  constructor () {
    this.ball = {
      x: 0,
      y: 0,
      dx: 152.02,
      dy: 355.2,
      width: 10
    }
    this.width = 300
    this.height = 300
  }
}
