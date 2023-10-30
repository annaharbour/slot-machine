const mongoose = require('mongoose');

const jackpotSchema = new mongoose.Schema({
  value: {
    type: Number,
    default: 1000, 
  },
});

const Jackpot = mongoose.model('Jackpot', jackpotSchema);

module.exports = Jackpot;
