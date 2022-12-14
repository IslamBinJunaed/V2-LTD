require("dotenv").config();

// import node pakage 
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');

// import db connection file
const connectDB = require("./db/db.js");
const connectObjectDb = require("./db/dbObject.js");

//import routes 
const usersRoute = require('./routes/users.js');
const authRoute = require('./routes/auth.js');

const app = express();

// DB connection
connectDB();
console.log("connected minio object storage at: http://" + connectObjectDb.host + ":" + connectObjectDb.port);

// middlewares
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true
}));
app.use(cookieParser());

// routes
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log('llistening on port ' + port + ' ...'));