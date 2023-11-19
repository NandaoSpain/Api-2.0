const { Router } = require("express");

const routes = Router();

const usersRouter = require("./users.routes")
const notesRouter = require("./notes.routes")

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);

module.exports = routes;