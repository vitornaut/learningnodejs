
const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste'/*data base*/, 'root'/*user*/, '****'/*password*/, {
    host: 'localhost'/*server*/,
    dialect: 'mysql'
})

//Retorno da conecção com a data base e tratamento de erros

sequelize.authenticate().then(function(){
    console.log(`Conectado com sucesso`)
}).catch(function(erro){
    console.log(`Flaha ao conectar: ${erro}`)
})

//Model para Postagens


const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

//Insaerção de dados para postagem -> EXEMPLO

/*
Postagem.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "bdcewifbceubfoebv feubquibeo efuoboqefe fobeoqbf"
})
 */

 //Model para Usuario

const Usuario = sequelize.define('usuarios', {
    Nome:{
        type: Sequelize.STRING
    },
    Sobrenome: {
        type: Sequelize.STRING
    },
    Idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Insaerção de dados para usuarios -> EXEMPLO

/* 
Usuario.create({
    Nome: "João",
    Sobrenome: "Neves",
    Idade: 33,
    email: "neves.joao@gmail.com"
})
*/
