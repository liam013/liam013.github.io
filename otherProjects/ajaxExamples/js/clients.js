
$(document).ready(function(){
    
$("#getClients").on("click", function(){

var url = "http://liam013.github.io/otherProjects/ajaxEamples/clients.json"

$.getJSON(url, function(data){

    $.each(data, function(index, item){
    $("#data").append(item.name);
    })
    //alert(data);
    //console.dir(data);
    
//JSON ends
})
//click function ends
})
//document ready ends
})