const { Schema, model } = require('mongoose');
const { options } = require('../controllers/homeController.js');



const userSchema = new Schema({
    username: { type: String, require: true, unique:true },
    hashedPassword: { type: String, require: true },
});

userSchema.index({ username: 1 }, {
    collaction: {
        locale: 'en',
        strength: 2
    }
});

const User = model("User", userSchema);

model.exports = User;