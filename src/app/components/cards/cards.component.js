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
            this.matchesCounter = 0;
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
                this.matchesCounter++;
                this.flippedCards = [];
            } else {
                this.flipHideCards();
                this.flippedCards = [];
            }

            // const matchedCards = this.flippedCards.filter( card => {
            //     return card.pairKey === pairKey;
            // });
            //
            // if ( matchedCards.length === this.flippedCards.length ) {
            //     console.log('GOT A MATCH ON PAIR:', pairKey);
            //     this.matchesCounter++;
            //     this.flippedCards = [];
            //
            //     if (this.matchesCounter === this.cards.length/2) {
            //         alert('you won');
            //     }
            // } else {
            //     console.log('NO MATCH');
            //     this.flipHideCards();
            //     this.flippedCards = [];
            // }
        }

        flipHideCards() {
            this.flippedCards.forEach( card => (card.isFlipped = false));
        }
    },
};
