

module.exports = {
    authAPI: (req, res, next) => {
        const key = process.env.NASA_API_KEY
        
        next(res.json(key))
    },
}