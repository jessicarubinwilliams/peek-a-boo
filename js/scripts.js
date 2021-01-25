$(document).ready(function() {
  $(".clickable").click(function() {
    $("#dog-showing").slideToggle();
    $("#dog-hidden").slideToggle();
  });
});