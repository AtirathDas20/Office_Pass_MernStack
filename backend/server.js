const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require('http');
const app = express();
const PORT = 1412;
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose
  .connect("mongodb://localhost/27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {console.log(err);
  });

// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const server=http.createServer(app);
server.listen(3000, () => {console.log("listening...........")});


