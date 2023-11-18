require("express-async-errors");

const AppError = require("./utils/AppError")

const express = require("express"); // aqui estou importando o express pra variavel

const routes = require("./routes")

const app = express(); // aqui estou inicializando o express
app.use(express.json()); //habilita o JSON no app

app.use(routes);

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));