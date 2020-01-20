const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;

//adding middlewares.
app.use(cors());
app.unsubscribe(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
