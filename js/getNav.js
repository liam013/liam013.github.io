$.get("http://liam013.github.io/partials/nav.html", function(data){

    $(document).ready(function(){
    $(".row footer").hide();
    $(".container").hide();
    $(".container").prepend(data);
    $(".container").fadeIn(800); 

   
    })


})

