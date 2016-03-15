$.get("http://liam013.github.io/partials/nav.html", function(data){

    $(document).ready(function(){
       // $(".container"){display:none;}
        $(".container").style.display = "none";
    $(".container").prepend(data);
        
   // $("body").prepend(data);
    //.container.fadeIn();
        $(".container").fadeIn(300);
    })

})