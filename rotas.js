const express = require("express")
const app = express()



app.get("/", function(req,res){
    res.send('Seja bem vindo/a ao app!')
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina sobre")
})

app.get("/blog", function(req,res){
    res.send("Bem Vindo/a ao Blog!")
})

app.get("/ola/:cargo/:nome", function(req,res){
    res.send(`<h1> Ola. Seu nome eh: ${req.params.nome} </h1>
             <h2> Seu cargo eh: ${req.params.cargo} </h2>`)
})

app.listen(8082, function(){
    console.log("Servidor rodando na url http://localhost:8082 ")

})

