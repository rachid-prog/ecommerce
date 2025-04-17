const User = require("../../models/user");

const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if(!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
        res.status(200).json({ success: true, message: "Utilisateur supprimé avec succès", data: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = deleteUserById;