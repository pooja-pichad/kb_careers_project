const express = require('express')
const router = express.Router()
const routes = require('../Controller/Attribute')
const auth = require("../Authorization/auth_token");


router.post("/Attribute_data", auth, routes.Attributes)


module.exports = router