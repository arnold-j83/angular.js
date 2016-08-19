angular.module('routingControllers',[])
    .controller('HomeController', function($scope) {
 
        $scope.title ="Home"
    })
    .controller('AboutController', function($scope) {
 
        $scope.title ="About"
    })
    .controller('ContactController', function($scope) {
 
        $scope.title ="Contact"
    })

    .controller('newController', function($scope) {
 
        $scope.title ="New"
    })

    .controller('DetailsController',function($scope,$routeParams) {
	  //
	  $scope.title='Details Page';
	  $scope.wherefrom=$routeParams.page;
	 });
angular.module("MyApp", ['myControllers']);

angular.module('myControllers',[])
.controller('FormController',function($scope) {
  $scope.user = {};
  $scope.wasSubmitted = false;

  $scope.submit = function() {
    $scope.wasSubmitted = true;
  };
});

angular.module('formControllers',[])
    
    //create RegisterController
     .controller('RegisterController',function($scope, $location) {
        $scope.register = {};
        $scope.submitted = false;
        $scope.uniqueusername = true;
        $scope.uniqueemail = true;

        $scope.registerForm = function(registerForm) {
            $scope.submitted = false;
            $scope.uniqueusername = false;
            $scope.uniqueemail = false;
             
           
                if (registerForm.$valid) {
                   $scope.submitted = true;
                   //continue with form processing
                   //use a service to check for validity of username
                   $scope.uniqueusername = true; //will trigger error if set to false

                   //use a service to check for validity of email

                   $scope.uniqueemail = true;//will trigger error if set to false

                if ($scope.uniqueusername &&
                    $scope.uniqueemail ) {
                      // proceed to process form via backend service
                      // if successful, route to validated page 
                        $location.path("/success/"+$scope.register.username);

                      }
           }
                else {
                      console.log("form is invalid");
                      $scope.submitted = true;
            }
        
    };
})
        //create successController passing in user parameter
        .controller("successController", function($scope, $routeParams){
            $scope.success= $routeParams.user

});