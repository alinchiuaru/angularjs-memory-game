import _ from 'underscore';

export class CardsService {
    contructor() {
        'ngInject';
    }

    _generateCards(n) {
        const self = this;

        for ( let i = 0; i < n*n; i++ ) {
            self.cardsArray.push({
                id: _.uniqueId('card_'),
                pairKey: -1,
                isFlipped: false,
            });
        }
    }

    _assignPairs() {
        const step = this.cardsArray.length % 2 === 0 ? 2 : 1;

        for ( let i = 0; i < this.cardsArray.length; i = i + step ) {
            let pairKey = _.uniqueId('pair_');

            this.cardsArray[i].pairKey = pairKey;
            this.cardsArray[i+1].pairKey = pairKey;
        }
    }

    _shuffleCards() {
        return _.shuffle(this.cardsArray);
    }

    getCards(n) {
        this.cardsArray = [];

        this._generateCards(n);
        this._assignPairs();

        return this._shuffleCards();
    }
}
