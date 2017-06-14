import uiRouter from 'angular-ui-router';
import { cardComponent } from './card.component';
// import './card.less';

export const card = angular
    .module('components.card', [
        uiRouter,
    ])
    .component('card', cardComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('card', {
                url: '/card',
                component: 'card',
            });
    })
    .name;
