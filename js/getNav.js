$.get("http://liam013.github.io/partials/nav.html", function(data){

    $(document).ready(function(){
    $("footer").hide();
    $(".container").hide();
    $(".container").prepend(data);
    $(".container").fadeIn(800); 

   
    })


})

