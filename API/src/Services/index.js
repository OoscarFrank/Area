const express = require("express");
const router = express.Router();



router.use("/discord/", require("./Discord"));
router.use("/trello/", require("./Trello"));
router.get("/services", require("./Get").getServices);


module.exports = router;