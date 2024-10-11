const express = require('express');
const deckService = require('../services/deckService');
const authenticateToken = require('../middleware/auth');

const router = express.Router();
router.post('/register', authenticateToken, async(req, res) =>{
    try{        
        const { idUsuario, nameDeck, description  } = req.body;
        const deck = await deckService.register(idUsuario, nameDeck, description);
        res.json(deck);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }
})

router.get('/decks', async (req,res)=>{
    try{
        const decks = await deckService.getDecks();
        res.json(decks);
    }
    catch(error){
        res.status(400).json({error: error.message});
    }

});

module.exports = router;