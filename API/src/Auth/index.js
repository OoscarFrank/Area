const express = require("express");

const router = express.Router();

router.post("/login", require("./Login"))
router.post("/register", require("./Register"))
router.post("/confirm", require("./Confirm"))

module.exports = router;