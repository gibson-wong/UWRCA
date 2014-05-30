$(document).ready(function(){


	var $totalMslides = 2; 		/*total up to 3 slides for the mobile events page*/
	var $currentMslides= 0;		/*first slide on index 0, also for mobile events page*/

	/*Toggle class for the flipping animation*/
	$(".imgcontainer").click(function(){
		 $(this).toggleClass("rotator")  ; 

		});
		$(".imgcontainer2").click(function(){
		 $(this).toggleClass("rotator2")  ; 

		});


	if ($currentMslides == 0){
		$("#Larrow").css("display", "none");
	}
	if ($currentMslides == $totalMslides)
	{
		$("#Rarrow").css("display","none");
	}


	$('#Rarrow').click(function()
		{
			$("#eventholdermobile").animate({right: "+=100%"},"slow");
			$currentMslides = $currentMslides+1;
			if ($currentMslides != 0)
			{
				$("#Larrow").css("display", "block");
			}
			if ($currentMslides != $totalMslides) {
				$("#Rarrow").css("display", "block");
			};
			if ($currentMslides == $totalMslides)
			{
				$("#Rarrow").css("display","none");
			}	
			if ($currentMslides == 0){
				$("#Larrow").css("display", "none");
			}		

		});
		$('#Larrow').click(function()
		{
			$("#eventholdermobile").animate({right: "-=100%"},"slow");
			$currentMslides = $currentMslides -1;
			if ($currentMslides != 0)
			{
				$("#Larrow").css("display", "block");
			}
			if ($currentMslides != $totalMslides) {
				$("#Rarrow").css("display", "block");
			};
			if ($currentMslides == $totalMslides)
			{
				$("#Rarrow").css("display","none");
			}	
			if ($currentMslides == 0){
				$("#Larrow").css("display", "none");
			}		

	});


});