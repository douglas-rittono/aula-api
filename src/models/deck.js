const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Deck = sequelize.define('Decks', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuario: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    nameDeck: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Deck;