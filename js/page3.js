$(document).ready(function() {
	$("#wizard").smartWizard({
		selected: 0,
		keyNavigation: false,
		transitionEffect: "fade",
		autoAdjustHeight: false,
		toolbarSettings: {
			showNextButton: false,
			showPreviousButton: false
		}
	});
	var active = "";
	if($("#step-1").css("display") == "block") active = "step-1";
	if($("#step-2").css("display") == "block") active = "step-2";
	if($("#step-3").css("display") == "block") active = "step-3";
	if(active == "step-3") $(".but").hide();
	$("a[href*=" + active + "]").addClass("active");
	$('.but').on("click", function() {
		$("#wizard").smartWizard("next");
	});
	$("#wizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection) {
    	if(stepNumber == 2) $(".but").hide();
    	else $(".but").show();
    	$(".active").removeClass("active");
    	$("a[href*=step-" + (stepNumber+1) + "]").addClass("active");
    });

});