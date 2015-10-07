var app = angular.module('ProxyDebbuger');
app.controller('BaseController', BaseController);

function BaseController($scope){

	$scope.socket = io("http://localhost:3000/");

	$scope.socket.on("msg", function(data){
		console.log(data);
	});

}