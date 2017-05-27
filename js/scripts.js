$(document).ready(function() {
  $("form").submit(function(event) {
    var name = $("#name").val();
    var numberType = $("#numberType").val();
    var number = $("#number").val();

    $("#contacts").append("<div class='newContact' style='border:1px solid black;margin-top:10px;padding:5px;'>" + name + "<p style='display:none;'>" + numberType + "<br>" + number + "<br><button class='btn btn-primary delete'>Delete</button></p></div>");

    event.preventDefault();
  });
  $("#contacts").on('click', '.newContact', function() {
    $("#contacts .newContact").not(this).find("p").hide();
    $(this).find('p').toggle();
  });
  $("#contacts").on('click', '.delete', function() {
    $(this).closest(".newContact").remove();
  });
});
