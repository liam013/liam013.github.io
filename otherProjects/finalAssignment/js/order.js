$(document).ready(function() {
//hides a red asterisks next to 'Name:' 'E-mail:' 'Address:' 'Situation: ' sections on page load (these are used for validation and will appear if user forgets to enter a given field)
    $(".hide-name").hide();
    $(".hide-mail").hide();
    $(".hide-address").hide();
    $(".hide-case").hide();
    

   //setting the format for the datepicker 
      $('#startRentDate').datepicker({
      format: "MM dd, yyyy"
      
      })
       //disabling timeRanges for booking a appointment to mimic when a store would open, close and break for lunch.     
      $('#disableTimeRangesExample').timepicker({'disableTimeRanges': [
        ['12am', '8am'], //store opens
        ['12pm', '1:00pm'], //lunch break
        ['8:30pm', '11:30pm'], //store closes
        ]                                        
      },
      { 'timeFormat': 'H:i A' },
      { 'scrollDefault': 'now' })

   //if url ends with #buyConsultation (done by clicking 'Buy Now' under the Consulation column at the home page) check the "consultation" box in the services order form   
if(window.location.href.indexOf("buyConsultation") > -1){
$('#checkbox1').prop('checked', true);
} 
    
    //if url ends with #buyRepairs (done by clicking 'Buy Now' under the Repairs column at the home page)  check the "repairs" box in the services order form
if(window.location.href.indexOf("buyRepairs") > -1){
$('#checkbox2').prop('checked', true);
} 
    
    //if url ends with #buyInstallation (done by clicking 'Buy Now' under the Installation column at the home page)  check the "installation" box in the services order form
if(window.location.href.indexOf("buyInstallation") > -1){
$('#checkbox3').prop('checked', true);
} 

  //append "Button mouseenter" to the #log area of the page    
  //change button text on mouse enter
  $("#myButton").on("mouseenter", function() {
      $("#log").append("<br>Button mouseenter");
      $(this).text("complete order");
    })
  
  //append "Button mouseleave" to the #log area of the page 
  //change button text on mouse leave
    .on("mouseleave", function() {
      $("#log").append("<br>Button mouseleave");
      $(this).text("order now");
    });


  //append "name field entered" in the #log area of the page
  //change field background color to off-white
  $("#mySingleLineText").on("focus", function() {
      $("#log").append("<br>Name field entered");
      $(this).css("background-color", "#F7F8E0");
    })
  
  //append "name field exited" in the #log area of the page 
  //change field background to white
    .on("blur", function() {
      $("#log").append("<br>Name field exited");
      $(this).css("background-color", "#FFF");
    });
    
   //append "e-mail field entered" in the #log area of the page 
   //change field background color to off-white
    $("#mySingleLineText2").on("focus", function() {
      $("#log").append("<br>E-mail field entered");
      $(this).css("background-color", "#F7F8E0");
    })
    
    //append "e-mail field exited" in the #log area of the page 
    //change field background to white
    .on("blur", function() {
      $("#log").append("<br>E-mail field exited");
      $(this).css("background-color", "#FFF");
    });
    
    
     //append "address field entered" in the #log area of the page 
    //change field background to off-white
    $("#mySingleLineText3").on("focus", function() {
      $("#log").append("<br>Address field entered");
      $(this).css("background-color", "#F7F8E0");
    })
    
     //append "address field exited" in the #log area of the page 
    //change field background to white
    .on("blur", function() {
      $("#log").append("<br>Address field exited");
      $(this).css("background-color", "#FFF");
    });

    
    //append "explanation field entered" in the #log area of the page 
    //change field background to off-white
    $("#myTextarea").on("focus", function() {
      $("#log").append("<br>Explanation field entered");
      $(this).css("background-color", "#F7F8E0");
    })
    
    //append "explanation field exited" in the #log area of the page 
    //change field background to white
    .on("blur", function() {
      $("#log").append("<br>Explanation field exited");
      $(this).css("background-color", "#FFF");
    });
    
    //hour length of service
     //append "length of service changed to: " in the #log area of the page
  $("#mySelect").on("change", function() {
    var val = $(this).val();
    $("#log").append("<br>Length of service changed to " + val);  
  });

    
    //startDate of the service appointment
    //append "Day of service changed to " in the #log area of the page
  $("#startRentDate").on("change", function(){
  var val = $(this).val();
  $("#log").append("<br>Day of service changed to " + val);
  });
    
    
    //startTime of the service appointment
    //append "Time of service changed to " in the #log area of the page
 $("#disableTimeRangesExample").on("change", function(){
  var val = $(this).val();
  $("#log").append("<br>Time of service changed to " + val);
  });

    //radio buttons used if the user wishes to receive additional e-mails about promotions and events in the area (notice this radio is checked to 'No' be default because people don't like receiving spam e-mails)
    //append "Email notification changes to: " "yes" or "no" in the #log area of the page
  $('input:radio[name=gender]').change(function() {
        if (this.value == 'Yes') {
            $("#log").append("<br>" + "Email notification changed to: yes");
        }
        else if (this.value == 'No') {
        
            $("#log").append("<br>" + "Email notification changed to: no");
        }
    });
    
    
    //if the first checkbox is checked append "Consultation service selected" to the #log area of the page
        $('#checkbox1').change(function() {
        if($(this).is(":checked")) {

        $('#log').append("<br>" + "Consultation service selected"); 
        }
        else{
        $('#log').append("<br>" + "Consultation service removed"); 
        }
    });
    
    //if the second checkbox is checked append "Repair service selected" to the #log area of the page
     $('#checkbox2').change(function() {
        if($(this).is(":checked")) {

        $('#log').append("<br>" + "Repair service selected"); 
        }
        else{
        $('#log').append("<br>" + "Repair service removed"); 
        }
    });
    
    //if the third checkbox is checked append "Installation service selected" to the #log area of the page
    
     $('#checkbox3').change(function() {
        if($(this).is(":checked")) {

        $('#log').append("<br>" + "Installation service selected"); 
        }
        else{
        $('#log').append("<br>" + "Installation service removed"); 
        }
    });

    //once the 'Order Now' button is clicked, +1 to the value of the "label-as-badge" in the nav bar 
       $('.target').click(function() {
    $('#orderNumber').html(function(i, val) { return val*1+1 });
})

  //user clicks the order button
  $("#myButton").on("click", function() {
      
   
      //name validation, if name is blank alert user, boder of text field becomes red and the asterisks is now visible 
       if (document.getElementById("mySingleLineText").value == "") { 
        alert("Your forgot to enter your name");  
        $(".hide-name").show();
        $("#mySingleLineText").css("border-color", "red");

        return false;  // stop submission until textbox is not '' 
        }  

      //e-mail validation, if name is blank alert user, boder of text field becomes red and the asterisks is now visible
         if (document.getElementById("mySingleLineText2").value == "") { 
        alert("Your forgot to enter your e-mail");  
            $(".hide-mail").show();
             $("#mySingleLineText2").css("border-color", "red");
        return false;  // stop submission until textbox is not '' 
        }  
      
      
      //address validation, if name is blank alert user, boder of text field becomes red and the asterisks is now visible
         if (document.getElementById("mySingleLineText3").value == "") { 
        alert("Your forgot to enter your address");  
            $(".hide-adress").show();
             $("#mySingleLineText3").css("border-color", "red");
        return false;  // stop submission until textbox is not '' 
        }  
      
      
      //service validation, if the user leaves all three service checkboxes blank, alert the user
        if (!$("#checkbox1").is(':checked') && !$("#checkbox2").is(':checked') && !$("#checkbox3").is(':checked')){
        alert("You forgot to select a service");
        return false; // stops submission until a checkbox is checked
        }
      
      //situation validation, this field is only to be filled out if the user selects either the "Repairs" or "Installation" services, alert user, boder of text field becomes red and the asterisks is now visible
        if (document.getElementById("myTextarea").value == "" && $('#checkbox2').is(":checked") || $('#checkbox3').is(":checked")){
        alert("You forgot to enter an explanation of your situation");
        $(".hide-case").show();
        $("#myTextarea").css("border-color", "red");
        return false;
        }
      
      //situation auto-corrects if user selects "Consultation" to N/A because the field is not required 
        $("#myTextarea").text($(this).val() || "N/A");
      
      //date validation, alert user if they left the date field blank, border of field becomes red
        if (document.getElementById("startRentDate").value == "") { 
        alert("Your forgot to set a date for the service");  
           
             $("#startRentDate").css("border-color", "red");
        return false;  // stop submission until textbox is not '' 
        }
      
      
      //time validation, alert user if they left the time field blank, border of field becomes red
       if (document.getElementById("disableTimeRangesExample").value == "") { 
        alert("Your forgot to set a time for the service");  
           
             $("#disableTimeRangesExample").css("border-color", "red");
        return false;  // stop submission until textbox is not '' 
        }
      
      //append "User placed an order" to the #log area of the screen
    $("#log").append("<br>User placed an order");

        
 
      //gathering data for JSON.stringify
         var order = {};

    var formData = $("input, select");
    formData.each(function (){
        
    var id = $(this).attr("id");
        
    order[id] = $(this).val();
        
    })
    
    alert("You have successfully ordered: "+ JSON.stringify(order));
  var userOrder = {};
    userOrder.myInput = $("#mySingleLineText").val();
    userOrder.myInput2 = $("#mySingleLineText2").val();
    userOrder.myInput3 = $("#mySingleLineText3").val();  
    userOrder.myTextarea = $("#myTextarea").val();
    userOrder.startRentDate = $("#startRentDate").val();
    userOrder.disableTimeRangesExample = $("#disableTimeRangesExample").val();
    userOrder.mySelect = $("#mySelect").val();
    userOrder.myRadio = $("[name='gender']:checked").val();
    userOrder.myCheckValues = [];
      
      
     $("[name='vehicle']:checked").each(function() {
      userOrder.myCheckValues.push($(this).val());
    })

     //this is the tidied up "reciept" area of the screen as serves as a second order summary section of the order form page
    $("#rec").append("Name: " + userOrder.myInput);
    $("#rec").append("<br>E-mail: " + userOrder.myInput2);  
    $("#rec").append("<br>Address: " + userOrder.myInput3);  
    $("#rec").append("<br>Service(s): " + userOrder.myCheckValues.join());
    $("#rec").append("<br>Explanation: " + userOrder.myTextarea);
    $("#rec").append("<br>Duration of service: " + userOrder.mySelect);
    $("#rec").append("<br>Date: " + userOrder.startRentDate);
    $("#rec").append("<br>Time: " + userOrder.disableTimeRangesExample);  
    
    
    $("#rec").append("<br>E-mailing list: " + userOrder.myRadio + "<br><hr>");   

        var startRentDate = $("#startRentDate").val();
        var disableTimeRangesExample = $("#disableTimeRangesExample").val();
        var myInput = $("#mySingleLineText").val();
        var myTextarea = $("#myTextarea").val();
        var mySelect = $("#mySelect").val();
        var myRadio = $("[name='gender']:checked").val();

        var myCheckValues = [];

        $("[name='vehicle']:checked").each(function() {
          myCheckValues.push($(this).val());
        });

       

     
      
})

 
});