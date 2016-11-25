$(document).ready(function() {
  $("form#cups-to-pints").submit(function(event) {
    event.preventDefault();
    var cupInput = parseInt($("#cups").val());

    var result = cupToPint(cupInput);
    $("#output").text(result);
    $(".convertshow").show();
  });

  $("form#cups-to-quarts").submit(function(event) {
    event.preventDefault();
    var cupInput = parseInt($("#cups").val());

    var result = cupToQuart(cupInput);
    $("#output").text(result);
    $(".convershow").show();
  });

  $("form#cups-to-gallons").submit(function(event) {
    event.preventDefault();
    var cupInput = parseInt($("#cups").val());

    var result = cupToGallon(cupInput);
    $("#output").text(result);
    $(".convertshow").show();
  });

});

var cupToPint = function(cupInput) {
  return cupInput + " cups is " + cupInput / 2 + " pints."
};

var cupToQuart = function(cupInput) {
  return cupInput + " cups is " + cupInput / 4 + " quarts."
};

var cupToGallon = function(cupInput) {
  return cupInput + " cups is " + cupInput / 16 + " gallons."
};

var pintToCup = function(pintInput) {
  return pintInput / 0.5
};

var pintToGallon = function(pintInput) {
  return pintInput / 8
};

var gallonToCup = function(gallonInput) {
  return gallonInput / 0.0625
};

var gallonToPint = function(gallonInput) {
  return gallonInput / 0.125
};
