//Abrindo conexão com o bando de dados

const Sequelize = require('sequelize')
const server = require('./serverConfig')
const sequelize = new Sequelize (server.dataBase, server.user, server.password, {
    host: 'localhost'/*server*/,
    dialect: 'mysql' 
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}