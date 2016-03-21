$(document).ready(function(){
	$(".thumb").click(function(){
		// var clickedImage = $(this).attr("src");
		$("#bigimage").hide(200);
		$("#bigimage").attr("src", $(this).attr("src"));
		$("#bigimage").fadeIn(500);
	});
});
