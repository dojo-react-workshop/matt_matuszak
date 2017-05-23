class Card {
    constructor(suit, denomination) {
        this.suit = suit;
        this.denomination = denomination
    }
}

class Deck {
    constructor() {
        this.resetCards();
    }

    resetCards() {
        this.playingDeck = [];
        let suits = ['Club', 'Spade', 'Heart', 'Diamond'];
        let denominations = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

        for (let suitIndex in suits) {
            for (let demon in denominations) {
                this.playingDeck.push(new Card(suits[suitIndex], denominations[demon]));
            }
        }
    }

    shuffle() {
        var copy = [],
            n = this.playingDeck.length,
            i;

        // While there remain elements to shuffle…
        while (n) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * n--);
            // And move it to the new array.
            copy.push(this.playingDeck.splice(i, 1)[0]);
        }
        this.playingDeck = copy;
    }

    length() {
        return this.playingDeck.length;
    }

    pop() {
        return this.playingDeck.pop();
    }
}

class Dealer {
    constructor(name, deck) {
        this.name = name;
        this.liveDeck = deck;
        this.discard = [];
    }

    draw() {
        if(this.liveDeck.length > 0)
            return this.liveDeck.pop();
    }

    deal(players) {
        // players.forEach(function(player) {
        //     player.take(this.deck.pop());
        // })
            // seems ood that the function cannot access the deck from the constructor of the class
        for (var i = 0; i < players.length; i++) {
            players[i].take(this.liveDeck.pop());
        }

        return this;
    }

    takeDiscard(card) {
        if(Array.isArray(card)) {
            console.log('discards-->', JSON.stringify(card))
            for (var i = 0; i < card.length; i++) {
                this.discard.push(card[i]);
            }
            console.log('discards-->', JSON.stringify(this.discard))

        } else {
            this.discard.push(card);
        }
    }

    cardCount() {
        return this.liveDeck.length() + this.discard.length;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    take(card) {
        this.hand.push(card);
    }

    discard() {
        if(this.hand.length > 0)
            return [this.hand.pop()];
    }

    fold() {
        console.log(JSON.stringify(this.hand));
        var cardsToReturn = this.hand.map(function(val) {return val});
        // var cardsToReturn = this.hand.values(); // why does this not work?  Is is a nodejs problem?
        this.hand = [];
        return cardsToReturn;
    }
}

let deck = new Deck();
deck.shuffle();

let dealer = new Dealer('Sarah', deck);

let john = new Player('John');
let pam = new Player('Pam');
let george = new Player('George');
let players = [john, pam, george];

dealer.deal(players).deal(players).deal(players);

console.log(JSON.stringify(players));

dealer.takeDiscard(john.discard());
dealer.takeDiscard(pam.discard());

dealer.takeDiscard(george.fold());
dealer.takeDiscard(pam.fold());
dealer.takeDiscard(john.fold());

console.log(players);
console.log(dealer.cardCount());


// console.log(deck);
// console.log(deck.playingDeck.length);
// console.log(deck.deal());
// console.log(deck.deal());
// console.log(deck.deal());
// console.log(deck.deal());
// console.log(deck.playingDeck.length);
