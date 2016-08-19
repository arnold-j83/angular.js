angular.module('myControllers', []);

angular.module('myControllers').controller('MyController',function($scope) {
      // set scope with first and last names 
      // add greeting function
      $scope.firstName = 'John';
      $scope.lastName = 'Arnold';
      $scope.greeting = function(){
            return "Greetings " + $scope.firstName + " "  + $scope.lastName;
      }
});
//angular.module('myControllers').controller('MyOtherCtrl',function($scope) 
//angular.module('myControllers').controller('myOtherCtrl',function($scope)
//angular.module('myControllers').controller('myOtherCtrl',function($scope)
angular.module('myControllers').controller('MyOtherCtrl',function($scope) 
{
	$scope.student = {
		firstName: " ",
		lastName: " ",
	};
});

angular.module('collegeControllers_OLD',[]).controller('StudentController',function($scope)
{
	var student = {
		firstName: "Rich",
		lastName: "Richie",
		fees: 500,
		subjects: [{name: 'Physics', marks: 70},
					{name: 'Chemistry', marks: 80},
					{name: 'Math', marks: 65},
					{name: 'English', marks: 75},
					{name: 'Hindi', marks: 67}],
		fullName: function(){
			return this.firstName + " " + this.lastName;
		}
};
$scope.student = student;
$scope.greeting = function(){
	return "Greetings " + $scope.student.fullName();

};
$scope.showResults = function(){
	  return ($scope.results ? $scope.results=false : $scope.results=true)
	};
$scope.aGradeFilter = function(subject)
{
	return (subject.marks > 74);
}
});



angular.module('collegeControllers',[]).controller('StudentController',function($scope,StudentService) {
  //  added our new student service        
  $scope.student = StudentService.getStudent();
  });