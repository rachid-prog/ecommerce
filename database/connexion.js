const mongoose = require("mongoose");
const server = require("../app");

const connexion = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`☻☻ MongoDB connecté: ${conn.connection.host} ${conn.connection.name} ☻☻`);
    }
    catch(error){
        console.log(error);
        // Fermeture du serveur en cas d'erreur
        server.close(() => process.exit(1));
    }
  
  
};

module.exports = connexion;
