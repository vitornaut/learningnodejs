//Abrindo conexão com o bando de dados

const Sequelize = require('sequelize')
const dbConfig = require('./dbConfig')
const sequelize = new Sequelize (dbConfig.dataBase , dbConfig.user, dbConfig.password, {
    host: 'localhost'/*server*/,
    dialect: 'mysql' 
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}