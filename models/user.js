const mongoose = require('mongoose')

//Controle email evitant les doublants
const uniqueValidator = require('mongoose-unique-validator')

// Modèle de données utilisateur :   contenant champs souhaité pour la base de donnée MongoDB
const userSchema = new mongoose.Schema ({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}) 

userSchema.plugin(uniqueValidator)            // applique methode plugin

module.exports = mongoose.model('user', userSchema);