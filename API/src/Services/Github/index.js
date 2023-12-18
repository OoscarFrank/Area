const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send({ msg: "Github" }));
router.post("/register", require("./Register"));


module.exports = router;