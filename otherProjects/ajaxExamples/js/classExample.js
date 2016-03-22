$(document).ready(function(){
$.getJSON("jsonDatabase/classExample.json",function(data){

    console.dir(data);
    
    var html = "";
    $.each(data, function(index, item){
     html += '<div class="col-md-3">'+
             '<img class="catImage" src="' + item.image + '"/>' +
             '<div class="catName">' + 'Year: ' + item.year + '</div>'+
             '<div class="catType">' + 'Title: ' + item.title + '</div>'+
             '<div class="catGender">' + 'Director: ' + item.director + '</div>'+
             '<div class="commentContainer">';
        //ind = index; i=item
         $.each(item.comments, function(ind, i){
         html+= '<div class="renterName">' + 'Username: ' + i.username + '</div>' +
        '<div class="renterComment">' + 'Comment: ' + i.comment + '</div>'+ 
        '<div class="renterStars">';
             
            var numStars= Number(i.stars);
             for (var i=1; i<=5; i++){
             if (i <= numStars){
             html+='<img src="images/star.png"/>';
             }
                 else{
                 html+='<img src="emptyStar.png"/>';
                 }
             }
             html+='</div>'; //end renterStars
         }) //each comment 
         
     html += '</div>'+ //commentContainer 
              '</div>'; //col-md-4
        
        
    })//each cat
   $("#catData").append(html);

    
    // closes getJSON
})
//closes document.ready
})
/* 
//one per cat

    <div class="catName"></div>
    <div class="catType"></div>
    <div class="catGender"></div>
    <img src=""/>
    <div class="commentsContainer">
    //one per comment
    <div class="renterName"></div>
    <div class="renterLocation"></div>
    <div class="renterStars"></div>
    //5 stars, some full, some empty
    </div> 
</div> 
*/    