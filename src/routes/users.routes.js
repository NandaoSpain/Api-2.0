const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router(); // funcionalidade Router de dentro do express

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);

module.exports = usersRoutes