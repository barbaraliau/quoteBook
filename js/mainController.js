var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, quoteService) {
	//gets quotes from service
	$scope.retrieveQuotes = function() {
		$scope.allQuotes = quoteService.getData();
	};
	//calls retrieveQuotes function to get quotes on load
	$scope.retrieveQuotes();
	$scope.filterText = "";
	$scope.filterAuthor = "";

	//adds input to quotes array
	$scope.addQuotes = function() {
		quoteService.addData($scope.textInput, $scope.authorInput);
		$scope.textInput = '';
		$scope.authorInput = '';
	};	

	//removes quotes if in array
	$scope.removeQuotes = function() {
		quoteService.removeData($scope.textInput, $scope.authorInput);
		$scope.textInput = '';
		$scope.authorInput = '';
	};

	//filters quotes when you click button
	$scope.filterQuotes = function() {
		if($scope.textInput){
			$scope.filterText = $scope.textInput;
		}
		else {
			$scope.filterText = "";
		}
		if($scope.authorInput){
			$scope.filterAuthor = $scope.authorInput;
		}
		else {
			$scope.filterAuthor = "";
		}
		$scope.textInput = "";
		$scope.authorInput = "";
	
	};





});


