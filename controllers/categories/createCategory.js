const Categorie = require("../../models/categorie");    
const slugify = require("slugify");


const createCategory = async (req, res) => {
    try{
       
        const categorie = await Categorie.create({...req.body, slug: slugify(req.body.nom, { lower: true})});
        if(!categorie) return res.status(400).json({ message: "Erreur lors de la création de la catégorie" });
        res.status(201).json({ success: true, data: categorie });
    }
    catch(error){
        console.log(error);
        if(error.name === "CastError") return res.status(400).json({ message: "Format de données invalide" });
        if(error.code === "ValidatorError") return res.status(400).json({ message: "Cette catégorie existe déjà" });
        if(error.message === "Error") return res.status(400).json({ message: "Format de l'image invalide" });
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

module.exports = createCategory;
