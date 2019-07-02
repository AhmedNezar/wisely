var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
	$scope.vac = [
		{
			title: "MARKET RESEARCH EXECUTIVE.",
			text: "3 years of research experience is a must in any field. Preference goes to finance/insurance background."
		},
		{
			title: "ACCOUNT EXECUTIVE.",
			text: "At least 2 years of managing corporate accounts with special focus on medical. Excellent internet, email, and office skills. Insurance background is a must. Loves to work with people and solve problems."
		},
		{
			title: "CUSTOMER SERVICE AGENTS.",
			text: "1 year of customer services experience, excellent internet, email, and office skills. Insurance background is a must. Loves to work with people and solve problems."
		}
	];
	$scope.countries = [
		{
			flag: "sa.png",
			name: "Saudi Arabia"
		},
		{
			flag: "jo.png",
			name: "Jordan"
		},
		{
			flag: "ku.png",
			name: "Kuwait"
		},
		{
			flag: "qa.png",
			name: "Qatar"
		},
		{
			flag: "ua.png",
			name: "UAE"
		}
	];
});