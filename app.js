// Importation des modules nécessaires
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const upload = require("./middleware/multer.config");
const path = require("path");

//favicon
const favicon = require("serve-favicon");


// Création de l'application express
const app = express();

// Configuration de dotenv
dotenv.config({ path: ".env" });

// Configuration du port
const PORT = process.env.PORT || 3000;

// Middleware pour parser les données JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// Middleware pour logger les requêtes
app.use((req, res, next)=>{
  console.log(`${req.method} ${req.url} ${new Date().toLocaleString()}`);
  next();
})

//favicon
app.use(favicon(__dirname + "/favicon.png"));

// Connexion à la base de données
require("./database/connexion")()


// Démarrage du serveur
const server = app.listen(PORT, () => {
  console.log(`☻☻ En écoute sur http://localhost:${PORT} ☻☻`);
});

//Routes catégories
app.use("/api/categories",   require("./routes/categories"));

//Routes produits
app.use("/api/produits",upload, require("./routes/produits"));

//Routes produits par catégorie
app.use("/api/categories/:id/produits", require("./routes/produits"));

//Routes users
app.use("/api/users", require("./routes/users"));


//route 404
app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvée" });
});

module.exports = server;



