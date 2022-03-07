const express = require('express')                   // Appel méthode express pour créer l'application
const app = express()

const mongoose = require('mongoose')
const userRoutes = require('./routes/user')          // Importation router user

app.use(express.json())

// Connexion de l'Api à la Base de donnée MongoDB Atlas
mongoose.connect('mongodb+srv://Min2000:Mina1985@cluster0.oe0ew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser: true,
 useUnifiedTopology: true})
.then(() => console.log('Connexion à MongoDB réusie!'))
.catch(() => console.log('Connexion à MongoDB échouée!'))

// Middleware Cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use('/api/auth', userRoutes)      // appel routes d'authentifications : inscription et login from user controllers                           
module.exports = app
