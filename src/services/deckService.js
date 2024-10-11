const deckRepository = require('../repositories/deckRepository');


class DeckService {
    async register(idUsuario, nameDeck, description){
        if(nameDeck == undefined || nameDeck.length > 60){
            throw new Error('Nome do deck deve ter no máximo 60 caracteres');
        }

        if(description == undefined || description.length < 30 || description.length > 300){
            throw new Error('Descrição do deck deve ter entre 30 e 300 caracteres');
        }

        const deck = await deckRepository.createDeck({ idUsuario, nameDeck, description });
        return deck;
    }

    async getDecks(){
        return deckRepository.findAll();
    }
}

module.exports = new DeckService();