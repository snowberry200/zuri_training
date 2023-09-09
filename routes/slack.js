const express = require("express");
const router = express.Router();
const { getAllInfo } = require("../controller/slack");

//defining all routes
router.route("/").get(getAllInfo)
module.exports = router;
