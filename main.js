//Adventure Mode

  let num1 = "";
  let num2 = "";
  let operator = "";
  let total = "";

  $("button").on("click", function (e) {
    e.preventDefault();
    var value = $(this).attr("id");
    if(operator === "" && isNaN(value)) {
      if ($(this).is("#clear")) {
        num1 = "";
        num2 = "";
        operator = "";
        total = "";
        $("#answer").html("");
      } 
      else if ($(this).is("#equals")) {
        return total;
      }
      else {
        operator = value;
      }
    }
    else if(num1 === "") {
        num1 = Number(value);
        $("#answer").html(value);
      }
    else if(num2 === "") {
        num2 = Number(value);
        $("#answer").html(value);
      } 
    else {
      total = eval(num1 + operator + num2);
      if(Number.isInteger(total)) {
        $("#answer").html(total);
      } else {
        var roundedTotal = total.toFixed(1);
        $("#answer").html(roundedTotal);
      }
      num1 = total;
      num2 = "";
      operator = "";
      }
  })