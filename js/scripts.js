$(document).ready(function() {
  $("#form").submit(function(event){
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if(sum(side1,side2) <= side3 || sum(side2,side3) <= side1 || sum(side1,side3) <= side2) {
      $(".output").empty().text("Not a triangle");
    } else if(side1 !== side2 && side2 !== side3) {
      $(".output").empty().text("Scalene");
    } else if(side1 === side2 && side2 === side3) {
      $(".output").empty().text("Equilateral");
    } else if(side1 === side2 || side1 === side3 || side2 === side3){
      $(".output").empty().text("Isosceles");
    }

    event.preventDefault();
  });
});

function sum(num1,num2) {
  return num1 + num2;
};