const express = require('express');
const Jackpot = require('../Models/JackpotModel');

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

exports.UpdateJackpot = async (req, res) => {
  try {
    const delta = req.body.delta; // Get the delta value from the request body
    const jackpot = await Jackpot.findOne();
    jackpot.value += delta;
    await jackpot.save();
    res.json({ value: jackpot.value });
  } catch (error) {
    console.error('Error updating the jackpot value:', error); // Log the error

    res.status(500).json({ error: 'Error updating the jackpot value.' });
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
