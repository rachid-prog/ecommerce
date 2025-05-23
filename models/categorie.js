const mongoose = require("mongoose");

const categorieSchema = new mongoose.Schema({
    nom: { type: String, 
        required: [true, "Le nom de la catégorie est obligatoire"], 
        unique: [true, "Cette catégorie existe déjà"], trim: true, 
        minlength: [3, "Le nom de la catégorie doit contenir au moins 3 caractères"],
        maxlength: [50, "Le nom de la catégorie doit contenir au plus 50 caractères"],
        validate: {
            validator: function(v) {
                return /^[a-zA-Z_éèàçù\s]+$/.test(v);
            },
            message: "Le nom de la catégorie ne peut contenir que des lettres, des espaces et _"
        }

    },
    slug: { type: String, },
    image: { type: String, },
    
}, { timestamps: true });

categorieSchema.post("init", (doc)=>{
    //Returner url+image
    
    if(doc.image){
        const imageUrl= `${process.env.BASE_URL}/api/categories/${doc.image}`
        doc.image = imageUrl;
    }
})

module.exports = mongoose.model("Categorie", categorieSchema);

