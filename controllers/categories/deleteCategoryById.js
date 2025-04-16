const Categorie = require("../../models/categorie");

const deleteCategoryById = async (req, res) => {
    try{
        const { id } = req.params;
        const categorie = await Categorie.findByIdAndDelete(id);
        if(!categorie) return res.status(404).json({ message: "Catégorie non trouvée" });
        res.status(200).json({ success: true, data: categorie });
    }
    catch(error){
        console.log(error);
        if(error.name === "CastError") return res.status(400).json({ message: "Format de données invalide" });
        if(error.name === "ValidationError") return res.status(400).json({ message: "Format de données invalide" });
        res.status(500).json({ message: "Erreur serveur" });
    }
};

module.exports = deleteCategoryById;
