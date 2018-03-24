//frontend logic
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
    if (results <= 7) {
      // $("#user-output").hide();
      // $(".c-sharp-result").show();
      // console.log(results);
      // // alert('hi');
      $(".user-name").text(userName);
      $(".user-output").prepend($(".c-sharp-result").show());
      // $(".user-name").text(name);

      // alert('hi');
      // debugger;

    } else if (results >= 8 && results <=10) {
      // $prompt(name + "you should take...");
      // $("#user-output").hide();
      // $(".react-css-result").show();
      // console.log(results);
      $(".user-output").prepend($(".react-css-result").show());

    } else if (results >= 11 && results <= 15) {
      // $("#user-output").hide();
      // $(".java-android-result").show();
      // console.log(results);
      $(".user-output").prepend($(".java-android-result").show());
    }

  });

});
