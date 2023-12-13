const express = require("express");
const router = express.Router();


router.use("/discord/", require("./Discord"));
router.use("/trello/", require("./Trello"));

module.exports = router;