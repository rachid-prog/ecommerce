const User = require("../../models/user");

const updateUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, { ...req.body }, { new: true });
        if(!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        if(error.name === "CastError") return res.status(400).json({ message: "Format de données invalide" });
        if(error.code === 11000) return res.status(400).json({ message: "Cet utilisateur existe déjà" });
        res.status(500).json({ message: error.message });
    }
}

module.exports = updateUserById;
