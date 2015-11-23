var remote = require('remote');
var config = remote.require('./config');

angular.module('MainApp', []);
angular.module('MainApp').controller('MainCtrl', function ($scope) {
	var items = [
		{ name: "item1" },
		{ name: "item2" },
		{ name: "item3" },
	];
	//$scope.items = items;
	$scope.items = config.getConfig();
	$scope.text = "Hello";
});
