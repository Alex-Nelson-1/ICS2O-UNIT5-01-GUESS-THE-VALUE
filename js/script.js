// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT5-01-GUESS-THE-VALUE/sw.js", {
    scope: "/ICS2O-UNIT5-01-GUESS-THE-VALUE/",
  })
}

//Input
const randomNum = Math.floor(Math.random() * 6) + 1 

function updateSliderValue(valueOfSlider) {
  document.getElementById("sliderValue").innerHTML = valueOfSlider
  //Process
  
  if(valueOfSlider == randomNum) {
    
    //Output
    document.getElementById("answer").innerHTML = "You guessed right! The correct number was " + randomNum + "!"
    document.getElementById("replay").innerHTML = "Please reload the page if you want to replay."
  }
  
  //Process
  if (valueOfSlider != randomNum) {
    
  //Output
    document.getElementById("answer").innerHTML = "Incorrect! The number was " + randomNum + "!" 
    document.getElementById("replay").innerHTML = "Please reload the page if you want to replay." 
  }
}