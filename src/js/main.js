// src/js/main.js

import update from './update.js'
import render from './render.js'
import GameState from './game-state.js'

let updateTime = 0.0
const updateDelta = 1000 / 60

let currentTime
let accumulator = 0.0

const state = new GameState()
state.addBall()
state.addBlock()

const button = document.getElementById('button')
let dot = 2
button.onclick = function () {
  for (let i = 0; i < dot; i++) {
    state.addBall()
  }
  dot *= 2
}

function main (newTime) {
  const frameTime = newTime - currentTime
  currentTime = newTime

  accumulator += frameTime

  while (accumulator >= updateDelta) {
    update(state, updateTime, updateDelta)
    accumulator -= updateDelta
    updateTime += updateDelta
  }

  render(state)

  window.requestAnimationFrame(main)
}

currentTime = performance.now()
window.requestAnimationFrame(main)
