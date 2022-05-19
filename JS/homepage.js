'use strict'

let body = document.querySelector('body')
let background = document.getElementById('background')

//Function for creating the outline for background image(s) and if statement to check current time, if:
//a) Time is less than 6 p.m. and more than 7 a.m. - show DAY GIF
//b) Time is more than 6 p.m. and less than 7 a.m. - show NIGHT GIF.
function setBackground () {
  let bgDiv = document.createElement('div')
  background.appendChild(bgDiv)

  var d = new Date()
  var hours = d.getHours()

  if (hours <= 18 && hours >= 7) {
    bgDiv.innerHTML = `<img src="../Images/Startpage_GIFs/day.gif">`
  } else {
    bgDiv.innerHTML = `<img src="../Images/Startpage_GIFs/night.gif">`
  }

  bgDiv.classList.add('bgImage')
}

//Function to create shape with text ('bubble') in bottom right corner
function setBgShape () {
  let bgShape = document.createElement('div')

  bgShape.classList.add('bgShape')

  body.appendChild(bgShape)
}

//Function to create icon ('Traveo') in top right corner
function setIcon () {
  let icon = document.createElement('div')

  icon.classList.add('icon')

  body.appendChild(icon)
}

//Function to run all functions at same time
function runBackground () {
  setBackground()
  setBgShape()
  setIcon()
}

//DIRECT CODE
runBackground()
