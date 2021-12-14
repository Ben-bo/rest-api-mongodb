const route = require("express").Router();
const postController = require("../controllers/post.controller");
route.get("/post", postController.findAll);
module.exports = route;
