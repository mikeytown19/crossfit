angular.module('crossfit').directive('profPic', function (settingsService, imageService) {

  return {
    restrict: 'A',
    scope: {
        profile: '='
    },
    link: function (scope, elem, attrs) {
      elem.bind("change", function (changeEvent) {
        var reader = new FileReader();

        reader.onloadend = function (loadEvent) {
          var fileread = loadEvent.target.result;
          var tempArray = elem[0].value.split('\\');
          var fileName = tempArray[tempArray.length - 1];
          imageService.storeImage(fileread, fileName, scope.profile.email)
          .then(function (result) {
                  scope.profile.profpic = result.data.Location;
                  settingsService.editUser(scope.profile);

          })
          .catch(function (err) {
            console.error(err);
          });
        }

        reader.readAsDataURL(changeEvent.target.files[0]);
      });
    }
  }
  })
