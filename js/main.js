$(function() {

  //setting the height/width of different elements
  $("main").css("height", $(window).height());
  $("#quotecard").css("height", $("#quotecard").width());
  $("#womanimage").css("height", $("#womanimage").width());
  //making height/width responsive to window resize
  $(window).on("resize", function() {
    $("main").css("height", $(window).height());
    $("#quotecard").css("height", $("#quotecard").width());
    $("#womanimage").css("height", $("#womanimage").width());
  });

  //hiding the main page when on the landing page
  $("#quotespage").hide();
  //landing page button shows main page
  $(function() {
    $("#startpagebutton").on("click", function() {
      $("#startpage").hide();
      $("#quotespage").show();
    });
  });

  //AJAX call to populate quotes/images
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
          $("#womanimage").css("background-image", `url("${womanimage}")`)
          $("#womanquote").html(`<p>"${womanquote}" <br><span> -${womanname}</span></p>`);
         },
        error: function(response){
          console.log('Dang it!');
        }
    });
  });

});


