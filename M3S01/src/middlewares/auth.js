const { verify } = require("jsonwebtoken");

async function auth(req, res, next) {
    try {
        console.log("Middleware is working!")

        const { authorization } = req.headers

        req['payload'] = verify(authorization, process.env.SECRET_JWT)

        next()

    } catch (error) {
        return res.status(401).json({
            message: "Authentication failed!",
            cause: error.message
        })
    }
}

module.exports = { auth }