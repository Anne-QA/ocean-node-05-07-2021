const express = require("express");
const app = express();

app.get("/Hello", function (req, res) {
  res.send("Hello World");
});

/* 
lista e Endpoints CRUD
Create, Read, (Single& All), Update, Delete
Criar, Ler (Individual e  Tudo), Atualizar, Remover

Associamos os endpoionts aos verbos de HTTP
Quando seguimos as conveções, utilizando os ver corre,
podemos dizer que a nossa aplicação segue padrões REST
Quando uma aplicação segue os padrões REST, ela é chamada de RESTful
[POST] -> Create
[GET] -> Read
[PUT/PATCH]-> Update
[DELETE] -> Delete
*/

// Escolha um tema: Filmes, Séries, Jogos, etc

const lista = ["Senhor dos Anéis", "Harry Potter"];

// [GET] - Read All
app.get("/filmes", function (req, res) {
  res.send(lista);
});

//[GET] -> Read Single (ou Ready by ID/Index)
app.get("/filmes/:id", (req, res) => {
  const id = req.params.id;

  const item = lista[id - 1];
  res.send(item);
});

//[POST] -> Create

//[PUT/PATCH]-> Update

//[DELETE] -> Delete

app.listen(3000);
