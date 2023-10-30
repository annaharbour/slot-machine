const express = require("express");
const router = express.Router();
const { Jackpot, IncreaseJackpot, Reset, DecreaseJackpot } = require("../controllers/JackpotController");

router.get("/jackpot", Jackpot);
router.post("/increasejackpot", IncreaseJackpot);
router.post("/decreasejackpot", DecreaseJackpot);
router.post("/reset", Reset);

module.exports = router; 
