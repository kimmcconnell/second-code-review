
//Buisness logic here

var score = 0;


//UI logic here

$(document).ready( function() {
  $("#nameform").submit( function(event) {
    event.preventDefault();
    score = 0;
    $(".biome").hide();
    $("#quiz").fadeIn();

    var name = $("#nameform input").val();
    $(".name").text(name);
  });

  $("#quizform").submit( function(event) {
    event.preventDefault();

    if (!$("input:radio[name=q1radios]:checked").val()) {
       alert("You didn't check the first question!");
    }
    else {
      var answer1 = parseInt($("input:radio[name=q1radios]:checked").val());
      var answer2 = parseInt($("input:radio[name=q2radios]:checked").val());
      var answer3 = parseInt($("input:radio[name=q3radios]:checked").val());
      var answer4 = parseInt($("input:radio[name=q4radios]:checked").val());
      var answer5 = parseInt($("input:radio[name=q5radios]:checked").val());
      score = answer1 + answer2 + answer3 + answer4 + answer5;

      $("#quiz").hide();

      if (score <= 8) {
        $("#forestbiome").fadeIn();
      } else if (score <= 13) {
        $("#grasslandbiome").fadeIn();
      } else if (score <= 16) {
        $("#desertbiome").fadeIn();
      } else if (score <= 20) {
        $("#tundrabiome").fadeIn();
      } else {
        $("#aquaticbiome").fadeIn();
      }
    }

  });

});
