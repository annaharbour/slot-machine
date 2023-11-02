const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    balance: {
        type: Number,
        default: 100, 
      },
})


userSchema.pre("save", async function(){
    this.password = await bcrypt.hashSync(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);