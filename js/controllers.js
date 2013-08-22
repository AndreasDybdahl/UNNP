'use strict';angular.module('prototype.controllers', []).controller('Step1Ctrl', ['$scope', '$location', function($scope, $location){			$scope.emner = [		'Informasjon', 		'Kommunikasjon', 		'Organisering', 		'Personalets faglige kompetanse', 		'Standard (bygninger, utstyr, osv)',		'Ventetid',		'Annet'	];		$('#step1Modal').modal({		keyboard: false,		backdrop: 'static'	});	$scope.dismiss = function(){		$location.path('/main');		$('#step1Modal').modal('hide');	};	$scope.$watch(function() {   	return 1300 - $scope.feedbackData.tilbakemelding.length;	}, function(newValue, oldValue) {   	$scope.ledig = newValue;	});}]);angular.module('prototype.controllers').controller('Step2Ctrl', ['$scope', function($scope){	$scope.oppholdsvarighet = [		'Én dag eller mindre', 		'2-7 dager', 		'1-2 uker', 		'3-4 uker', 		'1-2 mnd',		'2-4 mnd',		'Mer enn 4 mnd',		'Vet ikke / Ønsker ikke oppgi'	];		$scope.behandlinger = [		'Barn (0-18 år)', 		'Kirurgi / Operasjon', 		'Medisin', 		'Poliklinikk', 		'Psykiatri & Rus',		'Vet ikke / Ønsker ikke oppgi'	];		$scope.avdelinger = [		'Blankt'	];		$scope.$watch(function() {   	return !($scope.feedbackData.behandling.length > 0 && $scope.feedbackData.opphold.length > 0);	}, function(newValue, oldValue) {   	$scope.disableAvdeling = newValue;	});}]);angular.module('prototype.controllers').controller('Step3Ctrl', ['$scope', '$location', '$timeout', function($scope, $location, $timeout){	var lagre = false;	$scope.dismiss = function(){		$location.path('/main');		$('#step3Modal').modal('hide');	};		$scope.save = function(){		$('#step3Modal').modal({			keyboard: false,			backdrop: 'static'		});		if(lagre) {			return;		}			lagre = true;			var data = JSON.stringify($scope.feedbackData);				/*alert('Lagrer: ' + data);				$timeout(function(){			$location.path('/step-4');		}, 1000);				$location.path('/step-4');*/	};}]);angular.module('prototype.controllers').controller('Step4Ctrl', ['$scope', function($scope){}]);angular.module('prototype.controllers').controller('MainCtrl', ['$scope', function($scope){		}]);angular.module('prototype.controllers').controller('AdminCtrl', ['$scope', function($scope){		}]);angular.module('prototype.controllers').controller('Prep1Ctrl', ['$scope', function($scope){		$('#prep1Modal').modal({		keyboard: false,		backdrop: 'static'	});	$scope.$watch(function() {   	return 200 - $scope.prepData.beskrivelse.length;	}, function(newValue, oldValue) {   	$scope.ledig = newValue;	});	//var number = 0;		$scope.number = 0;	$scope.add = function(){		/*var lagre = false;		if(lagre) {			return;		}			lagre = true;		if (number < 10) {			var temp = ['', ''];			temp[0] = $scope.prepData.temadata[10];			temp[1] = $scope.prepData.temadata[11];			$scope.prepData.temadata[number] = temp[0];			$scope.prepData.temadata[number + 1] = temp[1];			$scope.prepData.temadata[10] = '';			$scope.prepData.temadata[11] = '';		};*/				var data = JSON.stringify($scope.prepData);				alert('Lagrer: ' + data);		$scope.number += 2;		return;	};}]);angular.module('prototype.controllers').controller('Prep2Ctrl', ['$scope', function($scope){		}]);