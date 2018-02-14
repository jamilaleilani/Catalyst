$(function() {
  console.log("JS working")

  $("#quotespage").hide();

  $(function() {
    console.log("function working")
    $("#startpagebutton").on("click", function() {
      console.log("click working?")
      $("#startpage").hide();
      $("#quotespage").show();
    });
  });

  $("#womanimage").html('<img src="img/cat.png">');
  $("#womanquote").html('Meow meow meow meow' + '<span> ~Cat</span>');

});


/*random number from 0-array.length
geting:
        var womanimage =
        var womanquote =
        var womanname =*/


