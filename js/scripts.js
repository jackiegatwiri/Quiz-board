var score = 0;
var answer = ["a", "b", "c", "d"];
var point = 5;

function merit() {
  var percentage = score / 25 * 100;
  $("#percentage").text("Your percentage is " + percentage + "%");
  if (percentage >= 80) {
    $("#remark").text("You have Excellently passed");
  } else if (percentage >= 50) {
    $("#remark").text("You have fairly passed");
  } else {
    $("#remark").text("You've scored poorly. You need to retake the test");
  }
}
$(document).ready(function() {
  $("#next").click(function() {
    $(".instructions").hide(300);
    $(".top").hide(300);
    $(".ques").show();
  });
  $("button#submit").click(function(event) {
    var qOne = $("input:radio[name=questionOne]:checked").val();
    var qTwo = $("input:radio[name=questionTwo]:checked").val();
    var qThree = $("input:radio[name=questionThree]:checked").val();
    var qFour = $("input:radio[name=questionFour]:checked").val();
    var qFive = $("input:radio[name=questionFive]:checked").val();
    if (qOne === undefined || qTwo === undefined || qThree === undefined || qFour === undefined || qFive === undefined) {
      alert("answer all the questions");
    } else {
      if (qOne === answer[1]) {
        score += point;
      }
      if (qTwo === answer[0]) {
        score += point;
      }
      if (qThree === answer[1]) {
        score += point;
      }
      if (qFour === answer[1]) {
        score += point;
      }
      if (qFive === answer[2]) {
        score += point;
      }
      $("#results").text("Your score is " + score + " ");
    }
    merit(score);
    event.preventDefault();
    $(".ques").hide();
    $(".total").show();
  });
  $("#retake").click(function() {
    $(".ques").show();
    $(".total").hide()
  });
});
