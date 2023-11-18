const express = require("express"); // aqui estou importando o express pra variavel

const routes = require("./routes")

const app = express(); // aqui estou inicializando o express
app.use(express.json()); //habilita o JSON no app

app.use(routes);


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));