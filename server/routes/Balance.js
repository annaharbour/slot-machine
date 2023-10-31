const express = require("express");
const router = express.Router();
const { updateBalance, getBalance } = require("../controllers/BalanceController");

router.post("/updateBalance", updateBalance);
router.get('/getBalance', getBalance)

module.exports = router; 
