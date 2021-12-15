module.exports = (app) => {
  const route = require("express").Router();
  const postController = require("../controllers/post.controller");
  route.post("/", postController.create);
  route.get("/:id", postController.findOne);
  route.put("/:id", postController.update);
  app.use("/api/post", route);
};
