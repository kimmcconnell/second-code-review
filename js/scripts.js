
//Buisness logic here

var score = 0;


//UI logic here

$(document).ready( function() {
  $("#nameform").submit( function(event) {
    event.preventDefault();
    score = 0;
    $(".biome").hide();
    $("#quiz").show();

    var name = $("#nameform input").val();
    $(".name").append(name);
  });

  $("#quizform").submit( function(event) {
    event.preventDefault();

    var answer1 = parseInt($("input:radio[name=q1radios]:checked").val());
    var answer2 = parseInt($("input:radio[name=q2radios]:checked").val());
    var answer3 = parseInt($("input:radio[name=q3radios]:checked").val());
    var answer4 = parseInt($("input:radio[name=q4radios]:checked").val());
    var answer5 = parseInt($("input:radio[name=q5radios]:checked").val());
    score = answer1 + answer2 + answer3 + answer4 + answer5;

    console.log(score);

    $("#quiz").hide();

    if (score <= 8) {
      $("#forestbiome").show();
    } else if (score <= 13) {
      $("#grasslandbiome").show();
    } else if (score <= 17) {
      $("#desertbiome").show();
    } else if (score <= 21) {
      $("#tundrabiome").show();
    } else {
      $("#aquaticbiome").show();
    }

  });

});
