$.get("http://liam013.github.io/partials/footer.html", function(data){

    $(document).ready(function(){
       $("body").apend(data);
    })

})