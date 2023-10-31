const User = require('../Models/UserModel')

exports.updateBalance = async (req, res) => {
    try {
      const { userId, delta } = req.body;
  
      // Find the user by their ID
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update the user's balance
      user.balance += delta;
  
      // Save the updated user record
      await user.save();
  
      return res.json({ balance: user.balance });
    } catch (error) {
      res.status(500).json({ error: 'Error updating user balance' });
    }
  };

     
exports.getBalance = async (req, res) => {
  try {
    const user = req.user; 
    const balance = await User.find({ balance });
    res.json(balance);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve tasks" });
  }
};