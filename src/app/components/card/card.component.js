export const cardComponent = {
    templateUrl: './templates/card.html',
    bindings: {
        card: '<',
        onFlip: '&',
    },
    controller: class CardController {
        constructor() {
            'ngInject';
        }

        $onInit() {
            console.log(this);
        }

        flipCard() {
            this.onFlip({
                $event: {
                    cardId: this.card.id,
                },
            });
        }
    },
};
