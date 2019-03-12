//=========Biz Logic=========//
var year = 2004;
var leapYear = function(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

//=========UI Logic=========//
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
//alert(leapYear(year));
//  $("#result").text(leapYear(year));
//  event.preventDefault();
var year = parseInt($("input#year").val());
var result = leapYear(year);

$(".year").text("year");

if (!result) {
  $(".not").text("not");
} else {
  $(".not").text("");
}
  });

});
