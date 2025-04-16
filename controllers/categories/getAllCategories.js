const Categorie = require("../../models/categorie");

const getAllCategories = async (req, res) => {
    try{
        const page = parseInt(req.query.page) || 1; //page par défaut
        const limit = parseInt(req.query.limit) || 10; //limite par défaut
        const skip = (page - 1) * limit; //nombre de documents à skip
        const categories = await Categorie.find().skip(skip).limit(limit);
        const total = await Categorie.countDocuments();
        const totalPages = Math.ceil(total / limit);
        if(!categories) return res.status(404).json({ message: "Aucune catégorie trouvée" });
        res.status(200).json({ success: true,page, totalPages, data: categories });
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

module.exports = getAllCategories;
