const express = require('express');
const app = express();
const path = require("path")
const bodyParser = require('body-parser');
const mainRoutes = require("./routes/main");

//Use .env file in config folder
const env = require('dotenv').config( {path: "./config/.env"} );

app.set("views" + __dirname + "views");
app.set('view engine', "ejs")
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/views')))

app.use("/", mainRoutes)

//server is running
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})