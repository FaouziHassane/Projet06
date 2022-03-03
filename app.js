const express = require('express')
const mongoose = require('mongoose')
const app = express()
// Connexion de l'Api à la base de donnée MongoDB Atlas
mongoose.connect('mongodb+srv://Min2000:Mina1985@cluster0.oe0ew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser: true,
 useUnifiedTopology: true})
.then(() => console.log('Connexion à MongoDB réusie'))
.catch(() => console.log('Connexion à MongoDB échoué'))

app.use(express.json())
// Middleware Cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Les routes serveur
app.post('/api/auth/signup', (req, res) => {
    console.log('signup requet', req.body)
    res.send({message: "Utilisateur enregistré!"})
})

module.exports = app 