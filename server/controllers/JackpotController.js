const express = require('express');
const Jackpot = require('../Models/JackpotModel');

let jackpotValue = 1000; // You can set an initial value


// Get the current jackpot value
exports.Jackpot = async (req, res) => {
  try {
    const jackpot = await Jackpot.findOne();
    res.json({ value: jackpot.value });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error getting jackpot value.' });
  }
};

// Add to the jackpot value
exports.IncreaseJackpot = async (req, res) => {
  try {
    const jackpot = await Jackpot.findOne();
    jackpot.value += 10;
    await jackpot.save();
    res.json({ value: jackpot.value });
  } catch (error) {
    console.error('Error adding to the jackpot value:', error); // Log the error

    res.status(500).json({ error: 'Error adding to the jackpot value.' });
  }
};

// Decrement jackpot value
exports.DecreaseJackpot = async (req, res) => {
    try {
        const jackpot = await Jackpot.findOne();
        jackpot.value -= 10;
        await jackpot.save();
        res.json({ value: jackpot.value });
    } catch (error) {
      console.error('Error adding to the jackpot value:', error); // Log the error
  
      res.status(500).json({ error: 'Error adding to the jackpot value.' });
    }
  };
  

// Reset the jackpot to its baseline value
exports.Reset = async (req, res) => {
  try {
    const jackpot = await Jackpot.findOne();
    jackpot.value = 1000; // Set your baseline jackpot value here
    await jackpot.save();
    res.json({ value: jackpot.value });
  } catch (error) {
    res.status(500).json({ error: 'Error resetting the jackpot.' });
  }
};
