$(document).ready(function() {
  $(".clickable").click(function() {
    $("#honey-showing").slideToggle();
    $("#honey-hidden").toggle();
  });

  $(".show").click(function() {
    $("#ahem-hidden").toggle();
    
  });


});