var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
	$scope.features = [{
		image: "images/p1.png",
		para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam"
	},
	{
		image: "images/p2.png",
		para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam"
	},
	{
		class: " pt-2",
		image: "images/p3.png",
		para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam"
	},
	{
		class: " pt-4",
		image: "images/p6.png",
		para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam"
	},
	{
		image: "images/p7.png",
		para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam"
	},
	{
		class: " pt-4",
		image: "images/p4.png",
		para: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam"
	}];
});