import { card } from './card/card.module';
import { cards } from './cards/cards.module';

export const components = angular
    .module('components', [
        card,
        cards
    ])
    .name;
