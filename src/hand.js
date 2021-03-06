class Hand{
    constructor(owner){
        this.owner = owner
        this.maxSize = 5
        this.cards = []

        this.cards[0] = new Card("Guard Tower", this.owner)
        this.cards[1] = new Card("Knight", this.owner)
        this.cards[2] = new Card("Fireball", this.owner)
        this.cards[3] = new Card("Assassin", this.owner)
        this.cards[4] = new Card("Firebound Apprentice", this.owner)
    }

    /*
    @pre        deck has cards in it
    @post       a card is drawn from the deck and added to the hand
    @param      deck, the deck object to draw from
    */
    draw(deck){
        let card = deck.cards.pop()
        this.cards.push(card)
    }

    /*
    @pre        hand is not empty
    @post       a card is discarded from the hand
    @param      card, the card to discard
    */
    discard(card){
        let cardIndex = this.cards.indexOf(card)
        this.cards.splice(cardIndex, 1)
    }
}

class Deck{
    constructor(owner){
        this.owner = owner
        this.cards = []

        this.cards[0] = new Card("Guard Tower", this.owner)
        this.cards[1] = new Card("Knight", this.owner)
        this.cards[2] = new Card("Fireball", this.owner)
    }

    /*
    @pre        deck has cards to shuffle
    @post       the order of the cards in the deck are shuffled
    */
    shuffle(){
        let array = this.cards
        let currentIndex = array.length,  randomIndex;
  
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
    
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }
}