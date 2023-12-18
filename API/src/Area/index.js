const express = require("express");

const router = express.Router();

router.post("/area/", require("./Post"))
router.get("/area/", require("./Get"))
router.put("/area/", require("./Put"))
router.delete("/area/", require("./Delete"))

module.exports = router;
