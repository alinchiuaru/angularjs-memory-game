import angular  from 'angular'
import uirouter from 'angular-ui-router'
import FirstmoduleController from './first.module.ctl'
import FirstmoduleService from './first.module.srv'

function configFuntion($stateProvider, $urlRouterProvider) {
	  
  	$stateProvider
	    .state(
	    	'first', {
				url: "/first",
				templateUrl: "./templates/first.module.tpl.html",
				controller: "FirstmoduleController as ctrl",
				resolve: {
					state: ['FirstmoduleService',function(firstmoduleService) {
						return firstmoduleService.doAsync();
					}]
				}
	    });
};

export default angular.module('app.firstmodule', [
	'ui.router',
])
.config(['$stateProvider', '$urlRouterProvider', configFuntion])
.controller('FirstmoduleController', ['FirstmoduleService',FirstmoduleController])
.service('FirstmoduleService',['$q', '$timeout', FirstmoduleService]);