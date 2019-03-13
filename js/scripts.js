//=========Biz Logic=========//
var number = 15;
var pingPong = function(number) {
    if ((number % 3 === 0) && (number % 5 !== 0) || (number % 3 === 0)) {
    return true;
  } else {
    return false;
  }
};

//=========UI Logic=========//
$(document).ready(function() {
  $("form#").submit(function(event) {
    event.preventDefault();
var number = parseInt($("input#number").val());
var result = pingpong(number);

$(".ping").text("number");

if (!result) {
  $(".not").text("not");
} else {
  $(".not").text("");
}
  });

});
