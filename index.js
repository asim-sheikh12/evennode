const axios = require("axios");
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors("*"));
const port = 3000;
app.get("/", (req, res) => res.status(200).json({ message: "Success" }));
app.get("/user", async (req, res) => {
  try {
    const response = await axios.get(
      "http://jsonplaceholder.typicode.com/users"
    );
    return res.status(200).json({ data: response.data });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
