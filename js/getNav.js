$.get("http://liam013.github.io/partials/nav.html", function(data){

    $(document).ready(function(){
      
    $(".container").hide();
    $(".container").prepend(data);
    $(".container").fadeIn(800); 
//make getFooter.js if he wants seperate .js files but only one html file
    $(".container").append.getElementsByClassName(".row footer");

    })


})

