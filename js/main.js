$(document).ready(function () {

  "use strict";

  AOS.init();

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
