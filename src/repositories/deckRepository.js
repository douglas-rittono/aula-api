const Deck = require('../models/deck');

class DeckRepository {
    async createDeck(deck){
        return await Deck.create(deck);
    }

    async findAll(){
        return await Deck.findAll();
    }
}

module.exports = new DeckRepository();