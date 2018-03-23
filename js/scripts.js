$(document).ready(function(){
  $("form#coding-form").submit(function(event){
    event.preventDefault();

    var results = 0;
    var who = parseInt($("#who").val());
    var what = parseInt($("#what").val());
    var where = parseInt($("#where").val());
    var when = parseInt($("#when").val());
    var why = parseInt($("#why").val());

    results = who + what + where + when + why;

    if (results === 5 && results <= 7) {
      $(".user-output").prepend($(".c-sharp-result").show());
    } else if (results > 8 && results <=10) {
      $(".user-output").prepend($(".react-css-result").show());
    } else if (results > 11) {
      $(".user-output").prepend($(".java-android-result").show());
    }
  });
});
