const bcrypt = require("bcrypt");
const User = require("../../models/user");
const bcrypt = require("bcrypt");

const modifYpassword = async (req, res) => {
    try {
        const { id } = req.params;
        const { password } = req.body;

        const user = await User.findById(id);
        if(!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = modifYpassword;
