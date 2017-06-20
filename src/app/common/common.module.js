import { navbar } from './navbar/navbar.module';

export const common = angular
    .module('common', [
            navbar
    ])
    .name;
