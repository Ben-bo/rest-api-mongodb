const postService = require("../services/post.service");

exports.findAll = async (req, res) => {
  try {
    let status = 200;
    let message = "success";
    const { dataService, error } = await postService.getAllService();
    if (error !== null) {
      (status = 500), (message = error);
    }
    res.status(status).send({
      Status: status,
      Message: message,
      Data: dataService,
    });
  } catch (error) {
    console.log("error get data:", error);
  }
};

exports.create = async (req, res) => {
  try {
    let status = 200;
    let message = "success";
    const { dataService, error } = await postService.createService(req.body);
    if (error !== null) {
      (status = 500), (message = error);
    }
    res.status(status).send({
      Status: status,
      Message: message,
      Data: dataService,
    });
  } catch (error) {
    console.log("error get data:", error);
  }
};
