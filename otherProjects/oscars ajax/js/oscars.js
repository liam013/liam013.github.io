$(document).ready(function(){
    
$("#getOscars").on("click", function(){

var url = "http://liam013.github.io/otherProjects/ajaxExamples/jsonDatabase/oscars.json"

$.getJSON(url, function(data){
var html = "<table class='table table-hover table-striped'>" +
    "<tr><th>Year</th><th>Title</th><th>Director</th><th>Do you agree?</th></tr>";
    $.each(data, function(index, item){
    //$("#data").append(item.name);
    html += "<tr>"+
    "<td>" + item.year + "</td>"+
    "<td>" + item.title + "</td>" + 
    "<td>" + item.director + "</td>" +
    "<td>" + "<input id='agree' name='agree' class='agree'  type='checkbox' value='' />" + " yes" + "</td>" +
    "</tr>";
        
    })
    
    html += "</table>";
    $("#data").append(html);
    
$("#compare").on("click", function(){
    var choice = ($('.agree:checked').length / 16) * 100;
    alert("You agree with " + $('.agree:checked').length + " of the choices," + " which is "+ choice+ "%" );
});
    
//JSON ends
})
//click function ends
})
//document ready ends
})