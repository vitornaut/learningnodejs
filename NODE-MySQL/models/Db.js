//Abrindo conexão com o bando de dados

const Sequelize = require('sequelize')
const sequelize = new Sequelize('Your-DataBase'/*data base*/, 'root'/*user*/, '**********'/*password*/, {
    host: 'localhost'/*server*/,
    dialect: 'mysql' 
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}