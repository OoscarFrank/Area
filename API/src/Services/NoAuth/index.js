const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send({ msg: "NoAuth" }));

module.exports = router;