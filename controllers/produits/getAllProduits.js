const Produit = require("../../models/produit");

const getAllProduits = async (req, res) => {
    try{
        const obj={}
        if(req.params.id) obj.categorie = req.params.id;
       
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;
        const produits = await Produit.find(obj).skip(skip).limit(limit).populate({path: "categorie", select: "nom"});
        const total = await Produit.countDocuments(obj);
        const totalPages = Math.ceil(total / limit);
        if(!produits) return res.status(404).json({ message: "Aucun produit trouvé" });
        res.status(200).json({ success: true, page, totalPages, data: produits });
    }
    catch(error){
        console.log(error);
        if(error.name === "CastError") return res.status(400).json({ message: "Format de données invalide" });
        if(error.name === "ValidationError") return res.status(400).json({ message: "Format de données invalide" });
        res.status(500).json({ message: "Erreur serveur" });
    }
};

module.exports = getAllProduits;
