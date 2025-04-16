const Produit = require("../../models/produit");

const deleteProduit = async (req, res) => {
    try{
        const { id } = req.params;
        const produit = await Produit.findByIdAndDelete(id);
        if(!produit) return res.status(404).json({ message: "Produit non trouvé" });
        res.status(200).json({ success: true, message: "Produit supprimé avec succès" });
    }
    catch(error){
        console.log(error);
        if(error.name === "CastError") return res.status(400).json({ message: "Format de données invalide" });
        if(error.name === "ValidationError") return res.status(400).json({ message: "Format de données invalide" });
        res.status(500).json({ message: "Erreur serveur" });
    }
};

module.exports = deleteProduit;

