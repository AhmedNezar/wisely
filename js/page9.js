calHeight();

function resize() {
	calHeight();
}

function calHeight() {
	var trs = document.getElementsByTagName("tr");
	var divider = document.getElementsByClassName("tdivider")[0].offsetHeight;
	var total1 = 0;
	var total2 = 0;
	for(var i = 0; i < trs.length; i++) {
		if(i < 8) total1 += trs[i].offsetHeight;
		else total2 += trs[i].offsetHeight;
	}
	document.getElementsByClassName("btr")[0].style.height = total1 + "px";
	document.getElementsByClassName("btr")[0].style.borderWidth = "1px 0px " + divider + "px 1px";
	document.getElementsByClassName("bbr")[0].style.height = total2 + "px";
}