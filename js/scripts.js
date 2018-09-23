
//Buisness logic here

var score = 0;


//UI logic here

$(document).ready( function() {
  $("#nameform").submit( function(event) {
    event.preventDefault();
    $(".biomes").hide();

    var name = $("#nameform input").val();
    $(".name").append(name);
  });

  $("#quizform").submit( function(event) {
    event.preventDefault();

    var answer1 = $("input:radio[name=q1radios]:checked").val();
    console.log(answer1);

  });

});
