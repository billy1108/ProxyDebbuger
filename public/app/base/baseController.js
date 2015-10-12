var app = angular.module('ProxyDebbuger');
app.controller('BaseController', BaseController);

function BaseController($scope){

	$scope.socket = io("http://localhost:3000/");
	$scope.requests = [];

	$scope.socket.on("msg", function(data){
		$scope.requests.push(data);
		$scope.$apply();
		console.log(data);
	});

}