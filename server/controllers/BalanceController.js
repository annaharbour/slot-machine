const express = require('express');
const User = require('../Models/UserModel')

exports.updateBalance = async (req, res) => {
    try {
      const { userId, winnings } = req.body;
  
      // Find the user by their ID
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update the user's balance
      user.balance += winnings;
  
      // Save the updated user record
      await user.save();
  
      return res.json({ balance: user.balance });
    } catch (error) {
      res.status(500).json({ error: 'Error updating user balance' });
    }
  };