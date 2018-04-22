// src/js/main.js

import update from './update.js'
import render from './render.js'

let start
let last

function main (timestamp) {
  if (!start) start = timestamp
  const delta = timestamp - last
  last = timestamp

  if (delta) {
    update(delta)
    render()
  }

  window.requestAnimationFrame(main)
}

window.requestAnimationFrame(main)
