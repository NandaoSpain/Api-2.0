const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path");


/*
função assincrona que cria uma conexão com o banco de dados e cria o arquivo database se ele não existir, basicamente eu crio uma constante chamada database que contém o método open do sqlite, passo um objeto contendo 2 coisas, primeiro o filename que é o diretório onde vai ser criado o arquivo e pra isso eu utilizo uma biblioteca que já vem com o node que é a path, basicamente ela resolve o diretório em qualquer SO, no metodo resolve eu passo o __dirname que é o diretório exato que estou no momento, dois pontos para voltar uma pasta, e o o nome do arquivo que quero criar, que é database.db e segundo o driver que vou utilizar que no caso é o sqlite3.Database, e a função retorna a constante que é database.
*/
async function sqliteConnection() {
    const database = await sqlite.open({
        filename: path.resolve(__dirname, "..", "database.db"),
        driver: sqlite3.Database
    })

    return database;
}

module.exports = sqliteConnection;