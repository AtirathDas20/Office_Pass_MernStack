const mongoose = require('mongoose');
const dbo_userSchena = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    password: String,
    role: String,
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', dbo_userSchena);