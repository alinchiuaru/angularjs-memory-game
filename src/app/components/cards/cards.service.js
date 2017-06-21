import _ from 'underscore';

export class CardsService {
    contructor() {
        'ngInject';
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
        this.cardsArray = [];
        this._generateCards(numberOfPairs, cardsPerPair);

        return this._shuffleCards();
    }

    checkPair(pair) {
        const pairKeys = pair.map( card => {
            return card.pairKey;
        });

        if( _.uniq(pairKeys).length === 1 ) {
            console.log('GOT A MATCH ON PAIR:');
            return true;
        } else {
            console.log('NO MATCH');
            return false;
        }
    }
}
