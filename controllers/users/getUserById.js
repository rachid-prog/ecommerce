const User = require("../../models/user");

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = getUserById;