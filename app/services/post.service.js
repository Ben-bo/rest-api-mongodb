const db = require("../models");
const objectID = require("mongodb").ObjectId;
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
  findOneService: async (id) => {
    try {
      let error = null;
      let result = {};
      //cek id valid atau tidak
      const validId = objectID.isValid(id);
      if (validId) {
        const findData = await Post.findById(id);

        if (!findData) {
          error = "ID : " + id + " NOT FOUND";
        } else {
          result = findData;
        }
      } else {
        error = "INVALID ID";
      }

      return {
        dataService: result,
        error,
      };
    } catch (err) {
      console.log(err);
    }
  },
  updateService: async (id, payload) => {
    try {
      let error = null;
      let result = {};
      const validId = objectID.isValid(id);
      if (validId) {
        const filter = { _id: id };
        const update = {
          title: payload.title,
          body: payload.body,
          isPublished: payload.isPublished ? payload.isPublished : false,
        };
        const updateData = await Post.updateOne(filter, update);
        if (updateData) {
          result = updateData;
        } else {
          error = "gagal Update";
        }
      } else {
        error = "INVALID ID";
      }
      return {
        dataService: result,
        error,
      };
    } catch (error) {
      console.log(err);
    }
  },
};

module.exports = postService;
