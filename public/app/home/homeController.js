var app = angular.module('ProxyDebbuger');
app.controller('HomeController', HomeController);

function HomeController($scope){

	$scope.showRequest = function(data, ev){
		$scope.checked = true;
		$scope.requestJson = JSON.stringify(data.json, undefined, 2);
		// loadHighlightCode();
	};

	function loadHighlightCode(){
		console.log("asdas");
		var jsonBox = document.getElementsByClassName('jsonBox')[0];
		console.log(jsonBox)
		hljs.highlightBlock(jsonBox);
	}

}
