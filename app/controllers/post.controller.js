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
exports.findOne = async (req, res) => {
  try {
    let status = 200;
    let message = "success";
    const id = req.params.id;
    const { dataService, error } = await postService.findOneService(id);
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

exports.update = async (req, res) => {
  try {
    let status = 200;
    let message = "success";
    const id = req.params.id;
    const { dataService, error } = await postService.updateService(
      id,
      req.body
    );
    if (error !== null) {
      (status = 500), (message = error);
    }
    res.status(status).send({
      Status: status,
      Message: message,
      RowEffected: dataService.modifiedCount,
    });
  } catch (error) {
    console.log("error get data:", error);
  }
};
exports.deleteData = async (req, res) => {
  try {
    let status = 200;
    let message = "success";
    const id = req.params.id;
    const { dataService, error } = await postService.deleteService(id);
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
