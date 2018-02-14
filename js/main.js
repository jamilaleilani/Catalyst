
$(function() {
  console.log("JS working")

  $(function() {
    console.log("function working")
    $("#startpagebutton").on("click", function() {
      console.log("click working?")
      $("#startpage").hide();
      $("#quotespage").show();
    });
  });

//

var compliment_endpoint="https://catalyst-api.herokuapp.com/quotes";
$.ajax({
  method: "GET",
  url: compliment_endpoint,
  data: {
  },
  success: function(response){
      var randomcompliment = Math.floor((Math.random()*response.length)+1);
      var name = response.name;
      var quote = response.quote;
      var image = `<image src=${response.image_url}></image>`;
      
     },
    error: function(response){
      console.log('Dang it!');
    }
});
})
