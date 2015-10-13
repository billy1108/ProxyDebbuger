var app = angular.module('ProxyDebbuger');
app.controller('BaseController', BaseController);

function BaseController($scope){

	$scope.socket = io("http://localhost:3000/");
	$scope.requests = [];

	$scope.socket.on("msg", function(data){
		$scope.requests.unshift(data);
		$scope.checkedRequests = true;
		$scope.$apply();
		console.log(data);
	});

}