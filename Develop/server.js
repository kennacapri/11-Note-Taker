const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require("fs");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// asynchronous processes. (they execute tasks in the background without user having to wait for task to finish)
//promisify takes function as an input that follows node.js callback style, and returns a version of the same that returns a promise instead of a callback.

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware
app.use(express.static("public"));

// api routes
app.use('/api', apiRoutes),
  app.use('/', htmlRoutes), 
  app.listen(PORT, () =>
  console.log(`example app listening at http://localhost:${PORT}`)
  );

