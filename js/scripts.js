$(document).ready(function() {
  $(".clickable").click(function() {
    $(".dog-showing").toggle();
    $(".dog-hidden").toggle();
  });
});