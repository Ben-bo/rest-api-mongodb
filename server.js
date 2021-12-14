const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const contoh = require("./routes/contoh");
app.use("/api/", contoh);

app.listen(PORT, () => {
  console.log(`server run on PORT ${PORT}`);
});
