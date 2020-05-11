$(document).ready(function () {
  "use strict";

  AOS.init();

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

var video = document.getElementById("video1");
var palayButton = document.querySelector(".play-button");
function playpause() {
  console.log("hi");
  if (video.paused) {
    video.play();
    palayButton.style.display = "none";
    video.setAttribute("controls", "true");
  } else {
    video.pause();
  }
}
