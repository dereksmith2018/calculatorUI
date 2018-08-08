// USER INTERFACE
var add = function(number1, number2) {
 return number1 + number2;
};

var subtract = function(number1, number2) {
 return number1 - number2;
};

var multiply = function(number1, number2) {
 return number1 * number2;
};

var divide = function(number1, number2) {
 return number1 / number2;
};

// Backend interface
$(document).ready(function() {
 $("#add9").click(function(event) {
 event.preventDefault();
 var number1 = parseFloat($("#add1").val());
 var number2 = parseFloat($("#add2").val());
 var result = add(number1, number2)
 $("#output").text(result);
 })

 $("#subtract9").click(function(event) {
 event.preventDefault();
 var number1 = parseFloat($("#add1").val());
 var number2 = parseFloat($("#add2").val());
 var result = subtract(number1, number2)
 $("#output").text(result);
 })

 $("#mulitply9").click(function(event) {
 event.preventDefault();
 var number1 = parseFloat($("#add1").val());
 var number2 = parseFloat($("#add2").val());
 var result = multiply(number1, number2)
 $("#output").text(result);
 })

  $("#divide9").click(function(event) {
 event.preventDefault();
 var number1 = parseFloat($("#add1").val());
 var number2 = parseFloat($("#add2").val());
 var result = divide(number1, number2)
 $("#output").text(result);
 })
});
