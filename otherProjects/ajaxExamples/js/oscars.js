$(document).ready(function(){
    
$("#getOscars").on("click", function(){

var url = "http://liam013.github.io/otherProjects/ajaxExamples/jsonDatabase/oscars.json"

$.getJSON(url, function(data){
var html = "<table class='table table-hover table-striped'>" +
    "<tr><th>Year</th><th>Title</th><th>Director</th></tr>";
    $.each(data, function(index, item){
    //$("#data").append(item.name);
    html += "<tr>"+
    "<td>" + item.name + "</td>"+
    "<td>" + item.email + "</td>" + 
    "<td>" + item.company + "</td>" +
    "</tr>";
        
    })
    
    html += "</table>";
    $("#data").append(html);
    
//JSON ends
})
//click function ends
})
//document ready ends
})