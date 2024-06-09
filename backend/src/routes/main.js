
const {Router} = require("express")
const router = Router()
const mainController = require("../controllers/main")

//Routes
router.get("/test",mainController.test);
router.get("")


module.exports = router

 