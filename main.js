//Explore Mode

$(function() {
   $("#add").on("click", function(e) {
    e.preventDefault();

    var num1 = Number($("#num1").val());
    var num2 = Number($("#num2").val());

    $("#answer").html(num1 + num2); 
  })

  $("#subtract").on("click", function(e) {
    e.preventDefault();

    var num1 = Number($("#num1").val());
    var num2 = Number($("#num2").val());

    $("#answer").html(num1 - num2); 
  })

  $("#multiple").on("click", function(e) {
    e.preventDefault();

    var num1 = Number($("#num1").val());
    var num2 = Number($("#num2").val());

    $("#answer").html(num1 * num2); 
  })

  $("#divide").on("click", function(e) {
    e.preventDefault();

    var num1 = Number($("#num1").val());
    var num2 = Number($("#num2").val());

    $("#answer").html(num1 / num2); 
  })
})