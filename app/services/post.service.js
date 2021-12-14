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
  createService: async (payload) => {
    try {
      let error = null;
      let result = {};
      const data = {
        title: payload.title,
        body: payload.body,
        isPublished: payload.isPublished ? payload.isPublished : false,
      };
      const postData = new Post(data);
      const saveData = await postData.save();
      if (saveData) {
        result = saveData;
      } else {
        error = "failed insert data";
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
