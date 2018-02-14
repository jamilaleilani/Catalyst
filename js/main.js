$(function() {
  console.log("JS working")

  $("main").css("height", $(window).height());

  $("#quotecard").css("height", $("#quotecard").width());
  console.log($("#quotecard").width());

  $(window).on("resize", function() {
    $("#quotecard").css("height", $("#quotecard").width());
    console.log($("#quotecard").width());
  });

  $("#quotespage").hide();

  $(function() {
    console.log("function working")
    $("#startpagebutton").on("click", function() {
      console.log("click working?")
      $("#startpage").hide();
      $("#quotespage").show();
    });
  });

  $("button").on("click", function() {

    var compliment_endpoint="https://catalyst-api.herokuapp.com/quotes";
    $.ajax({
      method: "GET",
      url: compliment_endpoint,
      data: {
      },
      success: function(response) {
          var randomcompliment = Math.floor((Math.random()*response.length));
          var womanname = response[randomcompliment].name;
          var womanquote = response[randomcompliment].quote;
          var womanimage = response[randomcompliment].image_url;

          $("#womanimage").html(`<img src=${womanimage}>`);
          $("#womanquote").html(`<p>"${womanquote}" <br><span> -${womanname}</span></p>`);
         },

        error: function(response){
          console.log('Dang it!');
        }
    });

  });


});


