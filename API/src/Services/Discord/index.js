const express = require("express");
const router = express.Router();

router.get("/", require("./getMe"));
router.post("/register", require("./Register"));


module.exports = router;


// https://discord.com/api/oauth2/authorize?client_id=1183779111005597766&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FconfirmDiscord&scope=identify+email