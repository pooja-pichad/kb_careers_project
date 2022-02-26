const express = require('express')
const router = express.Router()
const routes = require('../Controller/Orders')
const auth = require("../Authorization/auth_token");


router.post("/Orders", auth, routes.Orders)

router.get('/Orders_All', routes.Orders_All)

module.exports = router