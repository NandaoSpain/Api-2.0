const { Router } = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router(); // funcionalidade Router de dentro do express

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update)

module.exports = usersRoutes