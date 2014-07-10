$(document).ready(function() {
	var $current = 0; 		/* store which is the current page*/
	var $active = false;	// prevent user from multiple clicks

  $('.slideshow').cycle({
                fx: 'fade',
              pause: 1,
              prev: '#prev',
              next: '#next'
         
            });

	$('#events, #learnbutton').click (function()
    {


    	var $tempH = $('#wrapper').css("height") ;
         if ($current!=1)
         {
         	$('#wrapper').css("height", $tempH);

            $('#main div:visible').fadeOut(380,function (){          
               $("#eventspg, #eventspg>div").fadeIn(380); 


               $('#wrapper').css("height", "auto");

               return false;
            });
            $current=1;
         }
        return false;
    });	     
		

	$('#home').click (function()
    { 	

    	var $tempH = $('#wrapper').css("height") ;
         if ($current!=0)								/* make sure that the current page is not home*/
         {
         	$('#wrapper').css("height", $tempH);

            $('#main div:visible').stop(true, true).fadeOut(380,function (){          
               $("#homepg ,#homepg div").fadeIn(380); 

  
               $('#wrapper').css("height", "auto");
               return false;
            });
            $current=0;							//Changes the current page to home
         }
        return false;
    });	     
		
	$('#about').click (function()
    {
    	if ($active)
    	{

    	}
    	$active= true;
    	var $tempH = $('#wrapper').css("height") ;
         if ($current!=2)								/* make sure that the current page is not home*/
         {
         	$('#wrapper').css("height", $tempH);

            $('#main div:visible').fadeOut(380,function (){          
               $("#aboutpg, #aboutpg>div").fadeIn(380); 

               $active=false;
               $('#wrapper').css("height", "auto");
               return false;
            });
            $current=2;							//Changes the current page to home
         }
        return false;
    });	    

    $('#signup, #signupbutton').click (function()
    {
    	if ($active)
    	{

    	}
    	$active = true;
    	var $tempH = $('#wrapper').css("height") ;
         if ($current!=3)								/* make sure that the current page is not home*/
         {
         	$('#wrapper').css("height", $tempH);

            $('#main div:visible').fadeOut(380,function (){          
               $("#signuppg, #signuppg>div").fadeIn(380); 

               $active=false;
               $('#wrapper').css("height", "auto");
               return false;
            });
            $current=3;							//Changes the current page to home
         }
        return false;
    });	     
});

