$.get("http://liam013.github.io/partials/nav.html", function(data){

    $(document).ready(function(){
    $(".container").prepend(data);
   // $("body").prepend(data);
    //.container.fadeIn();
        $("data").fadeIn("slow");
    })

})