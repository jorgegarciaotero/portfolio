
//Import models
const e = require("express");
const main = require("../routes/main");

//Test actions
const test = (req, res) => {
    res.status(200).send({
        message: "Hello World"
    });
}

//Export actions
module.exports = {
    test
}


