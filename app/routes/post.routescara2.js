module.exports = (app) => {
  const route = require("express").Router();
  const postController = require("../controllers/post.controller");
  route.post("/", postController.create);
  app.use("/api/post", route);
};
