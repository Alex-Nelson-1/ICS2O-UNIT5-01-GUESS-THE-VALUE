// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

const randomNum = 4
const slider = 

/**
 * This function displays an alert.
 */
function updateSliderValue(valueOfSlider) {
  document.getElementById("sliderValue").innerHTML = valueOfSlider
}

function guessNumber() {
  if(slider == randomNum) {
    document.getElementById("answer").innerHTML = randomNum
  }
  else {
    document.getElementById("answer").innerHTML = "Incorrect"
  }
}

