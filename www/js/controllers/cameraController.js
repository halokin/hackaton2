function cameraController($scope, cameraService) {

   $scope.takePicture = function (options) {
	
      var options = {
         quality : 75,
         targetWidth: 200,
         targetHeight: 200,
         sourceType: 1
      };

      cameraService.getPicture(options).then(function(imageData) {
         $scope.picture = imageData;
         cameraService.picture = imageData;
      }, function(err) {
         console.log(err);
      });

   };
   console.log('egun on');

   $scope.sendEmail = function(){
      console.log(window.plugins);
      console.log(window.plugins.emailComposer);
      if(window.plugins && window.plugins.emailComposer) {
         window.plugins.emailComposer.ShowEmailWithCallback(function(result){
            console.log("Email Succes");
         },
         "subject here",
         "",
         ["orkatz@hotmail.com", "nicolas@hotmail.com", "julien@hotmail.com"],
         null,
         null,
         false,
         null,
         null
      );
      }
   }
};

