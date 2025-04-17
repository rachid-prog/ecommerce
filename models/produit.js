const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prix: { type: Number, required: true }, 
    slug: { type: String },
    description: { type: String, required: true },
    quantite: { type: Number, required: true },
    image: { type: String,},
    categorie: { type: mongoose.Schema.Types.ObjectId, ref: "Categorie", required: true },
});



module.exports = mongoose.model("Produit", produitSchema);

