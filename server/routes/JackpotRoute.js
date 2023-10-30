const express = require("express");
const router = express.Router();
const { Jackpot, IncreaseJackpot, Reset } = require("../controllers/JackpotController");

router.post("/Jackpot", Jackpot);
router.post("/IncreaseJackpot", IncreaseJackpot);
router.post("/Reset", Reset);

module.exports = router; // Export the router
