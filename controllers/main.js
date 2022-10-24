const env = require('dotenv').config( {path: "./config/.env"} );

module.exports = {
    getIndex: (req, res) => {
        
        res.render("index.ejs");
    },
    getApod: (req, res) => {
        
        res.render("apod.ejs");
    },
    getKey: (req, res) => {
        let key = process.env.NASA_API_KEY;
        res.json(key);
    },
    getMedia: (req, res) => {
        
        res.render("media.ejs");
    },
    getMoon: (req, res) => {
        
        res.render("moon.ejs");
    },
    getTitan: (req, res) => {
        
        res.render("titan.ejs");
    },
    getMars: (req, res) => {
        
        res.render("Mars.ejs");
    },    
    getEuropa: (req, res) => {
        
        res.render("europa.ejs");
    },
    
};