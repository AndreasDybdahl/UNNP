'use strict';angular.module('prototype', ['prototype.controllers'])	.config(['$routeProvider' , function($routeProvider){		$routeProvider			.when('/step-1', {templateUrl: 'partials/step-1.html', controller: 'Step1Ctrl'})			.when('/step-2', {templateUrl: 'partials/step-2.html', controller: 'Step2Ctrl'})			.when('/step-3', {templateUrl: 'partials/step-3.html', controller: 'Step3Ctrl'})			.when('/step-4', {templateUrl: 'partials/step-4.html', controller: 'Step4Ctrl'})			.when('/main', {templateUrl: 'partials/main.html', controller: 'MainCtrl'})			.when('/admin', {templateUrl: 'partials/admin_page1.html', controller: 'AdminCtrl'})			.when('/prep1', {templateUrl: 'partials/prep1.html', controller: 'Prep1Ctrl'})			.when('/prep2', {templateUrl: 'partials/prep2.html', controller: 'Prep2Ctrl'})			.otherwise({redirectTo: '/main'});}]);	angular.module('prototype').controller('Top', ['$scope', '$location', function($scope, $location){	$scope.feedbackData = {		emne: '',		tilbakemelding: '',		feedback: '',		gender: '',		status: '',		opphold: '',		behandling: '',		avdeling: '',		tilfredshet: ['', '', '', '', '', '', '', '', '', '', '']	};	$scope.prepData = {		beskrivelse: '',		temadata: ['', '', '', '', '', '', '', '', '', '', '', '']	};	$scope.adminData = {		historie: '',		kommentar: ''	};		$scope.isStep = function(stepNbr) {		var path = $location.path();				if(path == '/step-' + stepNbr) {			return 'active';		}					return '';	};}]);