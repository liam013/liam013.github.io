$.get("http://liam013.github.io/partials/nav.html", function(data){

    $(document).ready(function(){
       // $(".container"){display:none;}
        $(".container").html(response).css({'opacity':0}).animate({'opacity':1});
    $(".container").prepend(data);
        
   // $("body").prepend(data);
    //.container.fadeIn();
        $(".container").fadeIn(300);
    })

})