const User = require("../../models/user");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    try{
        const { nom, email, password, role } = req.body;
        console.log(nom, email, password);
        const hashedPassword = await bcrypt.hash(password, 10);
        if(!hashedPassword) return res.status(400).json({ success: false, message: "Erreur lors de la création de l'utilisateur" });
        const user = await User.create({ nom, email, password: hashedPassword, role });
        if(!user) return res.status(400).json({ success: false, message: "Erreur lors de la création de l'utilisateur" });
        res.status(201).json({ success: true, data: user });
    }
    catch(error){
        console.log(error);
        if(error.name === "CastError") return res.status(400).json({ success: false, message: "Format de données invalide" });
        if(error.code === 11000) return res.status(400).json({ success: false, message: "Cet utilisateur existe déjà" });
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = register;
