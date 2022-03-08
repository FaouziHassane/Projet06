const express = require('express')
const router = express.Router()
const stuffCtrl = require('../controllers/stuff')
const auth = require('../middleware/auth')

        /* const auth = require('../middleware/auth') */
router.post('/', auth, stuffCtrl.createThing)          // Enregistrer sauces dans la base de donnée   suite dans contollers stuff
router.put('/:id', auth, stuffCtrl.modifyThing)        // Modifier une sauce
router.delete('/:id', auth, stuffCtrl.deleteThing)     // Supprimer Une sauce
router.get('/:id', auth, stuffCtrl.getOneThing)        // récuperer Une seule sauce
router.get('/', auth, stuffCtrl.getAllThings)          // récuperer la liste des sauces : lire dans la base de donnée. middleware 1

module.exports = router

/*
  app.get('/api/sauces', (req, res, next) => {              // Get requete
    const sauces = [
      {
        _id: 'kksosd',
        name: 'nom',
        manufacturer: 'fabricant',
        description: 'description',
        ingredient: 'ingredient',
        userId: 'kkksjdhsgjg'
      }
    ]
    res.status(200).json(sauces)
  })

  */