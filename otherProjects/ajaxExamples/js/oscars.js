$(document).ready(function(){
$.getJSON("jsonDatabase/oscars.json",function(data){

    console.dir(data);
    
    var html = "";
    $.each(data, function(index, item){
     html += '<div class="col-md-3">'+
             '<img class="movieImage" src="' + item.image + '"/>' +
             '<div class="movieYear">' + 'Year: ' + item.year + '</div>'+
             '<div class="movieTitle">' + 'Title: ' + item.title + '</div>'+
             '<div class="movieDirector">' + 'Director: ' + item.director + '</div>'+
             '<div class="commentContainer">';
        //ind = index; i=item
         $.each(item.comments, function(ind, i){
         html+= '<div class="renterName">' + i.username + '</div>' +
        '<div class="renterStars">';
             
            var numStars= Number(i.stars);
             for (var i=1; i<=10; i++){
             if (i <= numStars){
             html+='<img src="images/star.png"/>';
             }
                 else{
                 html+='<img src="images/emptyStar.png"/>';
                 }
             }
             html+='</div>'; //end renterStars
         }) //each comment 
         
     html += '</div>'+ '<strong>Yes, I agree with this choice </strong> ' + "<input id='agree' name='agree' class='agree'  type='checkbox' value='' />" + "</li>" + "<br><br>" + //commentContainer 
              '</div>'; //col-md-4
        
       
    })//each movie
  
   $("#movieData").append(html);

    
    // closes getJSON
})
$("#compare").on("click", function(){
    var choice = ($('.agree:checked').length / 16) * 100;
    alert("You agree with " + $('.agree:checked').length + " of the choices," + " which is "+ choice+ "%" );
});

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