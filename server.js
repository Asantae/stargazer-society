const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mainRoutes = require("./routes/main");

//Use .env file in config folder
const env = require('dotenv').config( {path: "./config/.env"} );

app.set('view engine', "ejs")
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.use("/", mainRoutes)

//server is running
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})