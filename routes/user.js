const express = require('express')
const router = express.Router()                       // création router avec la fonction router d'express
const userCtrl = require('../controllers/user')       // le controleur pour associer les fonctions aux différentes routes


router.post('/signup', userCtrl.signup)               // Creation routes post signup
router.post('/login', userCtrl.login)                 // Creation routes post login

module.exports = router                               // Exportation de ce router