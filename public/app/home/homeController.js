var app = angular.module('ProxyDebbuger');
app.controller('HomeController', HomeController);

function HomeController($scope, $timeout){

	$scope.showRequest = function(data, ev){
		$scope.checked = true;
		$scope.data = data;
		$scope.headers = convertToArray(data.headers);
		loadHighlightCode(data);
	};

	function loadHighlightCode(data){
		$timeout(function() {
			var codeSection = document.getElementsByTagName("Code")[0];
			codeSection.innerHTML = JSON.stringify(data.json, undefined, 2);
	        var jsonBox = document.getElementsByClassName('jsonBox')[0];
			hljs.highlightBlock(jsonBox);
	    },0);
		
	}

	function convertToArray(json){
		var result = [];
		for(var i in json)
		    result.push({ "key" : i, "value" : json[i] });
		return result;
	}

	

}
