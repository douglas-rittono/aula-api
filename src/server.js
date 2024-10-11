const express = require('express');
const userController = require('./controllers/userController')
const contentController = require('./controllers/contentController')
const cardController = require('./controllers/cardController')
const deckController = require('./controllers/deckController')

const app = express();
app.use(express.json());
app.use('/api/users', userController);
app.use('/api/content', contentController);
app.use('/api/card', cardController);
app.use('/api/deck', deckController);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})