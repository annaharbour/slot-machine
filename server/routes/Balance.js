const express = require("express");
const router = express.Router();
const { updateBalance } = require("../controllers/BalanceController");

router.post("/updateBalance", updateBalance);

module.exports = router; 
