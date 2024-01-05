const { Router } = require("express");

const TagsController = require("../controllers/TagsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRoutes = Router(); // funcionalidade Router de dentro do express

const tagsController = new TagsController();

tagsRoutes.get("/", ensureAuthenticated, tagsController.index);


module.exports = tagsRoutes;