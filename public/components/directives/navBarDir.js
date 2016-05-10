angular.module( "crossfit" ).directive( "navbar", function () {
  return {
    templateUrl: 'components/views/navBar.html',
    controller: 'homeCtrl',
    restrict: 'E'
  }
  } );
