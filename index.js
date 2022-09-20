const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const hostname = "localhost";

app.listen(port, hostname, () => {
  console.log(`server listening on http://${hostname}:${port}`);
});
