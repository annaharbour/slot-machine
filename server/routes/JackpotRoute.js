const express = require("express");
const router = express.Router();
const { Jackpot, UpdateJackpot, Reset, } = require("../controllers/JackpotController");

router.get("/jackpot", Jackpot);
router.post("/updatejackpot", UpdateJackpot)
router.post("/reset", Reset);

module.exports = router; 
