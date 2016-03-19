$(document).ready(function(){
    
$("#getOscars").on("click", function(){

var url = "http://liam013.github.io/otherProjects/ajaxExamples/jsonDatabase/oscars.json"

$.getJSON(url, function(data){
var html = "<ul class='list-group'>";
    $.each(data, function(index, item){
    //$("#data").append(item.name);
    html += 
    "<li class='list-group-item'>" + 'Year: ' +  item.year + "</td>"+
    "<li class='list-group-item'>" + 'Title: ' +  item.title + "</td>" + 
    "<li class='list-group-item'>" + 'Director: ' +  item.director + "</td>" +
    "<li class='list-group-item'>" + 'Yes, I agree with this choice ' + "<input id='agree' name='agree' class='agree'  type='checkbox' value='' />" + "</li>" +
    "<br><br>";
        
    })
    
    html += "</ul>";
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