export const cardsComponent = {
    templateUrl: './templates/cards.html',
    controller: class CardsController {
        constructor(CardsService, $stateParams) {
            'ngInject';

            this.cardsService = CardsService;
            this.$stateParams = $stateParams;
            this.gridSize = this.$stateParams.gridSize;

            this.cards = [];
            this.flippedCards = [];
        }

        $onInit() {
            this.cards = this.cardsService.getCards(this.gridSize);
        }

        flipCard(event) {
            const card = this.cards.find( card => (card.id === event.cardId) );

            if (card.isFlipped)
                return;

            card.isFlipped = !card.isFlipped;


            this.flippedCards.push(card);
            this.flippedCards.length > 1 && this.checkMatch(card.pairKey);
        }

        checkMatch(pairKey) {
            const matchedCards = this.flippedCards.filter( card => {
                return card.pairKey === pairKey;
            });

            if ( matchedCards.length === this.flippedCards.length ) {
                console.log('GOT A MATCH ON PAIR:', pairKey);
                this.flippedCards = [];
            } else {
                console.log('NO MATCH');
                this.flipHideCards();
                this.flippedCards = [];
            }
        }

        flipHideCards() {
            this.flippedCards.forEach( card => (card.isFlipped = false));
        }
    },
};
