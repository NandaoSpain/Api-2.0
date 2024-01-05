const { Router } = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router(); // funcionalidade Router de dentro do express
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response) => {
    console.log(request.file.filename);
    response.json();
});

module.exports = usersRoutes;