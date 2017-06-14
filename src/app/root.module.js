import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { rootComponent } from './root.component';
import { components } from './components/components.module';

export const root = angular
    .module('root', [
        uiRouter,
        components,
    ])
    .component('root', rootComponent)
    .config(($locationProvider, $urlRouterProvider) => {
        'ngInject';

        $urlRouterProvider.otherwise('/card');
        // $locationProvider.html5Mode(true);
    })
    .name;
