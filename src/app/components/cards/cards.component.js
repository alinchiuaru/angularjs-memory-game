export const cardsComponent = {
    templateUrl: './templates/cards.html',
    controller: class CardsController {
        constructor(CardsService, $stateParams, $scope, $timeout) {
            'ngInject';

            this.cardsService = CardsService;
            this.$stateParams = $stateParams;
            this.$scope = $scope;
            this.$timeout = $timeout;
            this.numberOfPairs = this.$stateParams.numberOfPairs;
            this.cardsPerPair = this.$stateParams.cardsPerPair;

            this.cards = [];
            this.flippedCards = [];
        }

        $onInit() {
            this.cards = this.cardsService.getCards(this.numberOfPairs, this.cardsPerPair);

            this.$scope.$on('game-won', () => {
                alert('GAME OVER! YOU WON');
            });
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
                this.$timeout(this.flipHideCards.bind(this), 1000);
            }
        }

        flipHideCards() {
            this.flippedCards.forEach( card => (card.isFlipped = false));
            this.flippedCards = [];
        }
    },
};
