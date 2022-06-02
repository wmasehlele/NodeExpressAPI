const User = require("../models/User")
const jwt = require("jsonwebtoken")

exports.login = async (req, res, next) => {

    const username = req.body.username
    const password = req.body.password


    res.send("login working")
}