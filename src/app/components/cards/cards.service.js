import _ from 'underscore';

export class CardsService {
    constructor($rootScope) {
        'ngInject';

        this.$rootScope = $rootScope;
        this.$rootScope.matchedPairsCounter = 0;

        this.cardsArray = [];
    }

    _generateCards(numberOfPairs, cardsPerPair) {
        for ( let i = 0; i < numberOfPairs; i++) {
            let pairKey = _.uniqueId('pair_');

            for ( let j = 0; j < cardsPerPair; j++ ) {
                this.cardsArray.push({
                    id: _.uniqueId('card_'),
                    pairKey,
                    isFlipped: false,
                })
            }
        }
    }

    _shuffleCards() {
        return _.shuffle(this.cardsArray);
    }

    getCards(numberOfPairs, cardsPerPair) {
        this.numberOfPairs = parseInt(numberOfPairs);
        this._generateCards(numberOfPairs, cardsPerPair);
        this._watchCounter();

        return this._shuffleCards();
    }

    checkPair(pair) {
        const pairKeys = pair.map( card => {
            return card.pairKey;
        });

        if( _.uniq(pairKeys).length === 1 ) {
            console.log('GOT A MATCH');

            this.$rootScope.matchedPairsCounter++;

            return true;
        } else {
            console.log('NO MATCH');
            return false;
        }
    }

    _watchCounter() {
        this.$rootScope.$watch('matchedPairsCounter', (newValue) => {
            if ( newValue === this.numberOfPairs ) {
                this.$rootScope.$broadcast('game-won');
            }
        });
    }

}
