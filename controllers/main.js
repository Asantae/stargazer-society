const env = require('dotenv').config( {path: "./config/.env"} );

module.exports = {
    getIndex: (req, res) => {
        
        res.render("index.ejs");
    },
    getApod: (req, res) => {
        
        res.render("apod.ejs");
    },
    getKey: (req, res) => {
        let key = process.env.NASA_API_KEY
        res.json(key)
    }
};