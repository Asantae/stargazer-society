const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");


//Use .env file in config folder
const env = require('dotenv').config( {path: "./config/.env"} );

//Connect to database
connectDB();

app.set("views" + __dirname + "views");
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))
app.use("/", mainRoutes)