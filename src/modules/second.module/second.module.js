import angular  from 'angular'
import uirouter from 'angular-ui-router'
import SecondmoduleController from './second.module.ctl'
import SecondmoduleService from './second.module.srv'

function configFuntion($stateProvider, $urlRouterProvider) {
	  
  	$stateProvider
	    .state(
	    	'second', {
				url: "/second",
				templateUrl: "./templates/second.module.tpl.html",
				controller: "SecondmoduleController as ctrl",
				resolve: {
					state: ['SecondmoduleService', function(secondmoduleService) {
						return secondmoduleService.doAsync();
					}]
				}
	    });
};

export default angular.module('app.secondmodule', [
	'ui.router',
])
.config(['$stateProvider', '$urlRouterProvider', configFuntion])
.controller('SecondmoduleController', ['SecondmoduleService',SecondmoduleController])
.service('SecondmoduleService',['$q', '$timeout', SecondmoduleService]);