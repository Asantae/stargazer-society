


module.exports = {
    getIndex: (req, res) => {
        
        res.render("index.ejs", );
    },
    apiAuth: async function (req, res, next) {
        // Verify the api key and retrieve the APOD
        console.log("working")
        let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`)
        console.log(response.json())
    }
};