const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    username: String,
    email: String,
    password: Number
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
