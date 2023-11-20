const { Router } = require("express");

const TagsController = require("../controllers/TagsController");

const tagsRoutes = Router(); // funcionalidade Router de dentro do express

const tagsController = new TagsController();

tagsRoutes.get("/:user_id", tagsController.index);


module.exports = tagsRoutes;