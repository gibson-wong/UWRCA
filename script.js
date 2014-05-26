$(document).ready(function(){
	var $totalMslides = 2;
	var $currentMslides= 0;

	if ($currentMslides == 0){
		$("#Larrow").css("display", "none");
	}
	if ($currentMslides == $totalMslides)
	{
		$("#Rarrow").css("display","none");
	}

	$("#Rarrow").hover(function()
	{
		$("#Rarrow").css("cursor", "pointer");
	});
	$("#Larrow").hover(function()
	{
		$("#Larrow").css("cursor", "pointer");
	});

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