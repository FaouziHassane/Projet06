const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator') //Controle email evitant les doublants

// Modèle de données utilisateur avec champs souhaité pour la base de donnée MongoDB
const userSchema = mongoose.Schema ({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}) 

userSchema.plugin(uniqueValidator)                            // applique methode plugin

module.exports = mongoose.model('user', userSchema);