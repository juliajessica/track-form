//frontend logic

var counter = 0;

$(document).ready(function(){
  $("form#coding-form").submit(function(event){
    event.preventDefault();

    var results = 0;
    var question1 = parseInt($("#input-q1").val());
    var question2 = parseInt($("#input-q2").val());
    var question3 = parseInt($("#input-q3").val());
    var question4 = parseInt($("#input-q4").val());
    var question5 = parseInt($("#input-q5").val());
    var userName = $("input#name").val();


    var results = question1 + question2 + question3 + question4 + question5;

//backend logic
 // $("#coding-form").hide();
 $(".c-sharp-result").hide();
 $(".react-css-result").hide();
 $(".java-android-result").hide();
 
 counter = counter + 1;
  if (counter === 1) {
    $(".question1").show();
  } else if (counter === 2) {
    $(".question2").show();
  } else if (counter === 3) {
    $(".question3").show();
  } else if (counter === 4) {
    debugger;
    $(".question4").show();
  } else if (counter >=5) {
    $(".question5").show();
    if (results <= 7) {
      $(".c-sharp-result").show();
      $(".user-name").text(userName);
    } else if (results >= 8 && results <=10) {
      $(".react-css-result").show();
      $(".user-name").text(userName);
    } else if (results >= 11 && results <= 15) {
      $(".java-android-result").show();
      $(".user-name").text(userName);
      // console.log(results);
      // $(".user-output").prepend($(".c-sharp-result").show());
    }
  }
  });
});
