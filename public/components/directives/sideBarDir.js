angular.module( "crossfit" ).directive( "sideBar", function () {
  return {
    templateUrl: 'components/views/sideBar.html',
    controller: 'homeCtrl',
    restrict: 'E'
  }
  } );
