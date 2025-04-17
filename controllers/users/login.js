const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
 
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });       
        const isPasswordValid = bcrypt.compare(password, user.password);
        if(!user || !isPasswordValid) return res.status(401).json({ message: "Utilisateur ou mot de passe incorrect" });
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
        res.status(200).json({ success: true, message: "Connexion réussie",data: user.nom, token });       
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = login;

