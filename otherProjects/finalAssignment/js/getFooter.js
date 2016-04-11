$(document).ready(function() {
    //get all data from footer.html and place it after the .container
$.get("partials/footer.html", function(data){

    $(document).ready(function(){ 
      
    $(".container-fluid").append(data);


   
    })


})
});
