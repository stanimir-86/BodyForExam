const { Schema, model } = require('mongoose');
const { options } = require('../controllers/homeController.js');



const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
});

userSchema.index({ username: 1 }, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model("User", userSchema);

module.exports = User;