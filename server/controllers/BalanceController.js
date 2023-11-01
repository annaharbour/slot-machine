const User = require('../Models/UserModel')

// exports.updateBalance = async (req, res) => {
//   try {
//     const { userId, delta } = req.body;

//     // Find the user by their ID
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Check if the balance will go below 0 after the update
//     if (user.balance + delta < 0) {
//       return res.status(400).json({ error: 'Balance cannot go below 0' });
//     }

//     // Update the user's balance
//     user.balance += delta;

//     // Save the updated user record
//     await user.save();

//     return res.json({ balance: user.balance });
//   } catch (error) {
//     res.status(500).json({ error: 'Error updating user balance' });
//   }
// };

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

    // Check if the balance goes below 0 and reset to 100
    if (user.balance < 0) {
      user.balance = 100;
    }

    // Save the updated user record
    await user.save();

    return res.json({ balance: user.balance });
  } catch (error) {
    res.status(500).json({ error: 'Error updating user balance' });
  }
};
