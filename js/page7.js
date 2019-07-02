$(document).ready(function() {
	var active = "div1";
	$("#" + active).show();
	$(".title").click(function() {
		var tar = $(this).data("show");
		if(tar == active) return;
		$("#" + active).hide(500);
		$("#" + tar).show(500);
		active = tar;
	});
});