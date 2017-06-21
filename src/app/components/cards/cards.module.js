import uiRouter from '@uirouter/angularjs';
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
                url: '/cards/:numberOfPairs/:cardsPerPair',
                component: 'cards',
            });
    })
    .name;
