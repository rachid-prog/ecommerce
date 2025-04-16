const Produit = require("../../models/produit");
const slugify = require("slugify");

const createProduit = async (req, res) => {
    try{
        const produit = await Produit.create({ ...req.body, slug: slugify(req.body.nom, { lower: true})});
        if(!produit) return res.status(400).json({ message: "Erreur lors de la création du produit" });
        res.status(201).json({ success: true, data: produit });
    }
    catch(error){
        console.log(error);
        if(error.name === "CastError") return res.status(400).json({ message: "Format de données invalide" });
        if(error.name === "ValidationError") return res.status(400).json({ message: "Format de données invalide" });
        if(error.code === 11000) return res.status(400).json({ message: "Ce produit existe déjà" });
        res.status(500).json({ message: "Erreur serveur" });
    }
};

module.exports = createProduit;


