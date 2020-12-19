const Db = require('./Db')

const Post = Db.sequelize.define('postagens', {
    titulo: {
        type: Db.Sequelize.STRING
    },
    conteudo: {
        type: Db.Sequelize.TEXT
    }
})

// Post.sync({force: true})

module.exports = Post