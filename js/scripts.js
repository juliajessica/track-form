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

    results = question1 + question2 + question3 + question4 + question5;
//backend logic

    if (results === 5 && results <= 7) {
      $(".user-output").prepend($(".c-sharp-result").show());
    } else if (results > 8 && results <=10) {
      $(".user-output").prepend($(".react-css-result").show());
    } else if (results > 11) {
      $(".user-output").prepend($(".java-android-result").show());
    }
  });

  // function resetFunction(){
  //   document.getElementById("#coding-form").reset();
  // }

    // $("button.reset-btn").click(function(){
    // $("#reset-btn").click(function(){
    //   $("#coding-form").trigger('reset')
      // alert('hi');
      // $("#coding-form")[0].reset();
      // $(".user-output").hide();
    // });

});
