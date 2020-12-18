
const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste'/*data base*/, 'root'/*user*/, 'Temqtermaisde16!'/*password*/, {
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

Postagem.sync({force: true})