const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");


/*
CREATE => constante desconstruida com argumentos do body, constante database fazendo a conexao do banco de dados, constante para checar se o email que o usuario esta tentando cadastrar ja existe no BD com uma requisiçao get e o comando, se existe retorna erro, senao entra no database.run e executa o comando de inserção do novo usuario criptografando a senha com o comando hash onde passo a senha e o fator de complexidade e retorna o status 201 de created e um json vazio
*/
class UsersController {
    async create(request, response) {
        const { name, email, password } = request.body;

        const database = await sqliteConnection();

        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExists){
            throw new AppError("This email is already in use");
        }

        const hashedPassword = await hash(password, 8)

        await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);

        return response.status(201).json();


    }

    async update(request, response) {
        const { name, email } = request.body;
        const { id } = request.params;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

        if (!user) {
            throw new AppError("User not found.");
        }

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Email is already in use")
        }

        user.name = name;
        user.email = email;

        await database.run(`
            UPDATE user SET
            name = ?,
            email = ?,
            updated_at = ?
            WHERE id = ?,`,
            [user.name, user.email, new Date(), id]

            );
        
        return response.status(200).json();

    }
}

module.exports = UsersController;
