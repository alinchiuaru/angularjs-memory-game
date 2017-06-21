import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { rootComponent } from './root.component';
import { components } from './components/components.module';
import { common } from './common/common.module';

export const root = angular
    .module('root', [
        uiRouter,
        components,
        common,
    ])
    .component('root', rootComponent)
    .config(($locationProvider, $urlRouterProvider) => {
        'ngInject';
    })
    .name;
