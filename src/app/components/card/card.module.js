import { cardComponent } from './card.component';

export const card = angular
    .module('components.card', [])
    .component('card', cardComponent)
    .name;
