$(document).ready(function(){


	var $totalMslides = 9; 		/*total up to 3 slides for the mobile events page*/
	var $currentMslides= 0;		/*first slide on index 0, also for mobile events page*/



	if ($currentMslides == 0){
		$("#Larrow").css("display", "none");
	}
	if ($currentMslides == $totalMslides)
	{
		$("#Rarrow").css("display","none");
	}


	$('#Rarrow').click(function()
		{
			$("#slider").animate({right: "+=100%"},"slow");
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
		$("#slider").animate({right: "-=100%"},"slow");
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