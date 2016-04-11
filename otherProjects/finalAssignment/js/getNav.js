$.get("partials/nav.html", function(data){
//get all data from nav.html and place it before the .container on the screen 
    $(document).ready(function(){ 
       $(".container-fluid").hide();
    $(".container-fluid").prepend(data);
        $(".container-fluid").show(); 


   
    })


});

