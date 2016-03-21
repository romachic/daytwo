$(document).ready(function(){
	$("header").click(function(){
		$(this).next().toggle();
		$(this).find("span").toggleClass("fa-chevron-down");
		$(this).find("span").toggleClass("fa-chevron-up");
	});
});

