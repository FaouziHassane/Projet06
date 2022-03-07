const http = require('http')                    // Importation Package http natif de node pour créer le serveur
const app = require('./app')

app.set('port', process.env.PORT || 3000)       // configuration serveur 2 port au choix
const server = http.createServer(app)          // Méthode createServer du package http permettant de démarrer le serveur

server.listen(process.env.PORT || 3000)

// fichier server.js contenant le server Node