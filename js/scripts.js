$(document).ready(function() {
  $("form").submit(function(event) {
    var name = $("#name").val();
    var numberType = $("#numberType").val();
    var number = $("#number").val();

    $("#contacts").append("<div class='newContact' style='border:1px solid black;margin-top:10px;padding:5px;'>" + name + "<p style='display:none;'>" + numberType + "<br>" + number + "<br></p><button class='btn btn-primary nigga'>Delete</button></div>");

    event.preventDefault();
  });
  $("#contacts").on('click', '.newContact', function() {
    $(this).find('p').toggle();
  });
  $("#contacts").on('click', '.nigga', function() {
    $(this).closest("div").empty();
  });
});
