"use strict"

$(document).ready(function(){
     $("#emailForm").submit( function () {
        $.post(
           'mail.php',
            $(this).serialize(),
            function(data){
              $("#results").html(data)
            }
          );
          return false;   
    });   
    $(".submit").click(function () {
        var isAllFieldsValid = $("#emailForm")[0].checkValidity();
        if (isAllFieldsValid) {
            alert( "Your message has been sent. Thank you." );
        }
    }); 
});