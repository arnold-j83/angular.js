angular.module('movieDBControllers',[])
.controller('MovieListController',function($scope,MovieListService) {
// set scope with first and last names
   var url = "https://api.themoviedb.org/3/movie/popular?api_key=1c0e406bf696030f6b759b0f7110efb1";
   $scope.movieList = [];
   

   MovieListService.getList(url).then(
      function(result){
          $scope.movieList = result.data.results;  

      }
      ).catch(
        function(error) { 
          console.log('error', error)
        });
});
