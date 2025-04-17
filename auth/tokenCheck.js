const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Headers Authorization: Bearer <token>

const tokenCheck = async (req, res, next) => {
     console.log(req.headers.authorization)
    // 1-Récupérer le token dans le header Authorization console.log(req.headers.authorization)
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1];
    }
    if(!token) return res.status(401).json({ message: "Token manquant" });      
    
    // 2-verifier si le token existe et non expirer [decoded => userId, iat, exp] ou error.name===JsonWebTokenError
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if(!decoded) return res.status(401).json({ message: "Token invalide" });
    
    // 3-Vérifier si user existe dans la base de données
    const user = await User.findById(decoded.userId)
    if(!user) return res.status(401).json({ message: "Utilisateur non trouvé" });
   
   
    req.user = user;
    next()
  

    
 
}

module.exports = tokenCheck;
