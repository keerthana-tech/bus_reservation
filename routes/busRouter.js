const express = require('express')
const router = express.Router()

const busController = require("../controller/busController")

router.get('/',busController.display)
router.post('/',busController.insert)


module.exports = router