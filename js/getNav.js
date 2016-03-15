$.get("http://liam013.github.io/partials/nav.html", function(data){

    $(document).ready(function(){
      
    $(".container").hide();
    $(".container").prepend(data);
    $(".container").fadeIn(800); 

    $(".container").append.getElementsByClassName(".row footer");

    })


})

