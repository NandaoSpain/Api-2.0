const { Router } = require("express");

const routes = Router();

const usersRouter = require("./users.routes")
const notesRouter = require("./notes.routes")
const tagsRouter = require("./tags.routes")

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter);

module.exports = routes;