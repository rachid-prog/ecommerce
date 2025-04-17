const User = require("../../models/user");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        if(!users) return res.status(404).json({ message: "Aucun utilisateur trouvé" });
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = getAllUsers;
