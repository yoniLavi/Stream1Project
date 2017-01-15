angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
      $scope.myInterval = 5000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
  
      // My slides
      $scope.slides = [
        {
          image: "img/bobmarley1.jpg",
          // text: "a",
          id: 0
        },
        {
          image: "img/jimmycliff5.jpg",
          // text: "b",
          id: 1
        },
        {
          image: "img/reggae3.jpg",
          // text: "c",
          id: 2
        },
      ];
    })
    .controller('BandController', function($scope){
    	$scope.title = "Band Page";
    });