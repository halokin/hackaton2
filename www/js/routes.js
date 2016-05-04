function routes($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('camera',{
		url:'/camera',
		templateUrl: 'views/camera.html',
		controller: 'controllers/cameraController'
	});
	$urlRouterProvider.otherwise("/camera")
}