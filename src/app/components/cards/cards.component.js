export const cardsComponent = {
    templateUrl: './templates/cards.html',
    controller: class CardsController {
        constructor(CardsService, $stateParams) {
            'ngInject';

            this.cardsService = CardsService;
            this.$stateParams = $stateParams;
            this.numberOfPairs = this.$stateParams.numberOfPairs;
            this.cardsPerPair = this.$stateParams.cardsPerPair;

            this.cards = [];
            this.flippedCards = [];
        }

        $onInit() {
            this.cards = this.cardsService.getCards(this.numberOfPairs, this.cardsPerPair);
        }

        flipCard(event) {
            const card = this.cards.find( card => (card.id === event.cardId) );

            if (card.isFlipped)
                return;

            card.isFlipped = !card.isFlipped;


            this.flippedCards.push(card);
            this.flippedCards.length > 1 && this.checkMatch();
        }

        checkMatch() {
            if ( this.cardsService.checkPair(this.flippedCards) ) {
                this.flippedCards = [];
            } else {
                this.flipHideCards();
                this.flippedCards = [];
            }
        }

        flipHideCards() {
            this.flippedCards.forEach( card => (card.isFlipped = false));
        }
    },
};
