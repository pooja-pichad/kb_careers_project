const express = require('express')
const router = express.Router()
const routes = require('../Controller/Profile_data')
const auth = require("../Authorization/auth_token");

router.post("/Signup", routes.Signup)

router.post("/Login", routes.Login)

router.get("/profile_data", auth, routes.profile_Data)

router.put("/profile_data_update", auth, routes.profile_Data_update)

router.delete("/profile_Data_Delete", auth, routes.profile_Data_Delete)


module.exports = router