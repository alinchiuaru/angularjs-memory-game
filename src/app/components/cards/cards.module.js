import uiRouter from 'angular-ui-router';
import { cardsComponent } from './cards.component';
import { CardsService } from './cards.service';

export const cards = angular
    .module('components.cards', [
        uiRouter,
    ])
    .service('CardsService', CardsService)
    .component('cards', cardsComponent)
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('cards', {
                url: '/cards/:gridSize',
                component: 'cards',
            });
    })
    .name;
