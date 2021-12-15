module.exports = (app) => {
  const route = require("express").Router();
  const postController = require("../controllers/post.controller");
  route.post("/", postController.create);
  route.get("/:id", postController.findOne);
  app.use("/api/post", route);
};
