const express = require("express"); // aqui estou importando o express pra variavel

const app = express(); // aqui estou inicializando o express

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));