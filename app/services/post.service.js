const db = require("../models");
const Post = db.posts;
const postService = {
  getAllService: async () => {
    try {
      let error = null;
      let result = {};
      const dataPost = await Post.find();
      if (dataPost.length === 0) {
        error = "no data";
      } else {
        result = dataPost;
      }

      return {
        dataService: result,
        error,
      };
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = postService;
