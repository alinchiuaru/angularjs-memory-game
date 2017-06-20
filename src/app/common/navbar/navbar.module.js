import { navbarComponent } from './navbar.component';

export const navbar = angular
    .module('common.navbar', [])
    .component('navbar', navbarComponent)
    .name;
