'use strict';var app = angular.module('test', [])	.config(['$routeProvider' , function($routeProvider){		$routeProvider			.when('/step-1', {templateUrl: 'partials/step-1.html', controller: 'Step1'})			.when('/step-2', {templateUrl: 'partials/step-2.html', controller: 'Step2'})			.when('/step-3', {templateUrl: 'partials/step-3.html', controller: 'Step3'})			.when('/step-4', {templateUrl: 'partials/step-4.html', controller: 'Step4'})			.otherwise({redirectTo: '/step-1'});	}]);	app.controller('Top', ['$scope', '$location', function($scope, $location){	$scope.data = {		emne: '',		tilbakemelding: '',		feedback: 'true',		gender: 'male',		status: 'patient',		opphold: '',		behandling: '',		avdeling: '',		tilfredshet: ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3']	};		$scope.isStep = function(stepNbr) {		var path = $location.path();				if(path == '/step-' + stepNbr) {			return 'active';		}					return '';	};}]);app.controller('Step1', ['$scope', function($scope){			$scope.emner = [		'Informasjon', 		'Kommunikasjon', 		'Organisering', 		'Personalets faglige kompetanse', 		'Standard (bygninger, utstyr, osv)',		'Ventetid',		'Annet'	];		$scope.$watch(function() {   	return 1300 - $scope.data.tilbakemelding.length;	}, function(newValue, oldValue) {   	$scope.ledig = newValue;	});}]);app.controller('Step2', ['$scope', function($scope){	$scope.oppholdsvarighet = [		'Én dag eller mindre', 		'2-7 dager', 		'1-2 uker', 		'3-4 uker', 		'1-2 mnd',		'2-4 mnd',		'Mer enn 4 mnd',		'Vet ikke / Ønsker ikke oppgi'	];		$scope.behandlinger = [		'Barn (0-18 år)', 		'Kirurgi / Operasjon', 		'Medisin', 		'Poliklinikk', 		'Psykiatri & Rus',		'Vet ikke / Ønsker ikke oppgi'	];		$scope.avdelinger = [		'Blankt'	];		$scope.$watch(function() {   	return !($scope.data.behandling.length > 0 && $scope.data.opphold.length > 0);	}, function(newValue, oldValue) {   	$scope.disableAvdeling = newValue;	});}]);app.controller('Step3', ['$scope', '$location', '$timeout', function($scope, $location, $timeout){	var lagre = false;		$scope.save = function(){		if(lagre) {			return;		}			lagre = true;			var data = JSON.stringify($scope.data);				/*alert('Lagrer: ' + data);				$timeout(function(){			$location.path('/step-4');		}, 1000);*/				$location.path('/step-4');	};}]);app.controller('Step4', ['$scope', function($scope){}]);