$(document).ready(function() {
  $(".clickable").click(function() {
    $("#dog-showing").fadeToggle();
    $("#dog-hidden").fadeToggle();
  });
});