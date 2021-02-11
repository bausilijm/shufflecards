class Deck {
    constructor() {
        this.theCards = [];
    }
}

const makeDeck = () => {
    console.log('Creating a new deck.');
    let newDeck = new Deck();
    let suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
    let faces = ['J', 'Q', 'K', 'A'];
    for (let a = 0; a <= 3; a++) {
        for (let i = 2; i <= 10; i++) {
            newDeck.theCards.push(i + ' of ' + suits[a]);
        }
        for (let i = 0; i <= faces.length; i++) {
            newDeck.theCards.push(faces[i] + ' of ' + suits[a]);
        }
    }
    console.log(`New deck of ${newDeck.theCards.length} cards created.`);
    return newDeck;
}

const shuffle = deck => {
    let shuffleDeck = [];
    let randomPosition;
    console.log('Shuffling the deck.');
    for (let i = 0; i <= 51; i++) {
        randomPosition = Math.floor(Math.random() * deck.theCards.length);
        shuffleDeck.push(deck.theCards[randomPosition]);
        deck.theCards.splice(randomPosition, 1);
    }
    console.log('Shuffling complete.');
    return shuffleDeck;
}

let newDeck = makeDeck();
let shuffleDeck = shuffle(newDeck);
console.log(shuffleDeck);