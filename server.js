const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const db = require("./app/models");

//connect dalam database
db.mongoose
  .connect(db.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("cant connect database:", err);
    process.exit(); //hentikan programm
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import route cara 1
const { contoh, postRoute } = require("./app/routes");
app.use("/api", contoh, postRoute);

// import route cara 2
require("./app/routes/post.routescara2")(app);

app.use("/", (req, res) => {
  res.send({
    status: 500,
    Message: "url not found",
  });
});

app.listen(PORT, () => {
  console.log(`server run on PORT ${PORT}`);
});
