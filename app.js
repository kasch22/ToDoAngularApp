/*
$(document).ready(function(){
	alert("Hello! I am an alert box!!");
 });
 */

 angular.module('ToDo', []).controller('todocontroller',['$scope', function($scope ){
	//Array holding list	

	
	
	$scope.todos = [
	{'title':'What needs to be done today?', 'done':false}
	]; 
	 
	$scope.addTodo = function(){
		 // Pushes <input> value and flase boolon to todos array scope
		 $scope.todos.push({'title':$scope.newToDo, 'done':false});
		 //resets form input
		 $scope.newToDo = '';
		 
	};

	// Filter Function to clear don items
	$scope.clearCompleted = function(){
		 $scope.todos =$scope.todos.filter(function(item){
			 return !item.done;
		 })
	};

	$scope.clearAll = function(){
	 	$scope.todos = [];
	} 
	 
 }]);