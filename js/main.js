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


  var womanimage = '"img/cat.png"'
  var womanquote = "Meow meow meowwww"
  var womanname = "Cat"

  $("#womanimage").html(`<img src=${womanimage}>`);
  $("#womanquote").html(`"${womanquote}" <span> -${womanname}</span>`);

});


