const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
    nom: { type: String, required: true, unique: true, trim: true ,minlength:3, maxlength:50,
        validate: {
            validator: function(v){
                return /^[a-zA-Z0-9\s]+$/.test(v);
            },
            message: "Le nom ne peut contenir que des lettres, des chiffres et des espaces"
        }
    },
    prix: { type: Number, required: true, min:0, max:1000000,
        validate: {
            validator: function(v){
                return /^[0-9]+$/.test(v);
            },
            message: "Le prix ne peut contenir que des chiffres"
        }
    }, 
    slug: { type: String },
    description: { type: String, required: true, minlength:10, maxlength:1000,
        validate: {
            validator: function(v){
                return /^[a-zA-Z0-9\s]+$/.test(v);
            },
            message: "La description ne peut contenir que des lettres, des chiffres et des espaces"
        }
    },
    quantite: { type: Number, required: true, min:0, max:1000, 
        validate: {
            validator: function(v){
                return /^[0-9]+$/.test(v);
            },
            message: "La quantité ne peut contenir que des chiffres"
        }
    },
    image: { type: String,},
    categorie: { type: mongoose.Schema.Types.ObjectId, ref: "Categorie", required: true,
        validate: {
            validator: function(v){
                return mongoose.Types.ObjectId.isValid(v);
            },
            message: "La catégorie est invalide"
        }
    },
}, { timestamps: true });



module.exports = mongoose.model("Produit", produitSchema);

