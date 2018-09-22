
//Buisness logic here




//UI logic here

$(document).ready( function() {
  $("#nameform").submit( function(event) {
    event.preventDefault();
    $(".biomes").hide();
    var name = $("#nameform input").val();
  })

});
