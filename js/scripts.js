

// Business Logic

var add = function(number1, number2){
return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2
};

var divide = function(number1, number2){
  return number1 / number2
};

// User Interface Logic
$(document).ready(function(){
  $("button#start").click(function() {
    $(".btn").addClass("button-animation");
  });

  $("button#stop").click(function(){
    $(".btn").removeClass("button-animation");
  });

  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);

});

$("form#subtract").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#sub1").val());
  var number2 = parseInt($("#sub2").val());
  var result = subtract(number1, number2);
  $("#output").text(result);

});

$("form#multiply").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#mul1").val());
  var number2 = parseInt($("#mul2").val());
  var result = multiply(number1, number2);
  $("#output").text(result);

});

$("form#divide").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#div1").val());
  var number2 = parseInt($("#div2").val());
  var result = divide(number1, number2);
  $("#output").text(result);

});

});
