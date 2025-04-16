const Joi = require("joi");

const schemaCategorie = (req, res, next) => {
    const schema = Joi.object({
        nom: Joi.string().required().min(3).max(30).trim().regex(/^[a-zA-Z_éèàçù\s]+$/).lowercase()
        .message({
            "string.empty": "Le nom de la catégorie est obligatoire",
            "string.min": "Le nom de la catégorie doit contenir au moins 3 caractères",
            "string.max": "Le nom de la catégorie doit contenir au plus 30 caractères",
            "string.regex": "Le nom de la catégorie doit contenir uniquement des lettres et des underscores",
            "string.lowercase": "Le nom de la catégorie doit être en minuscule",
        })
    })

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}

const schemaProduit = (req, res, next) => {
    const schema = Joi.object({
        nom: Joi.string().required().min(3).max(30).trim().regex(/^[a-zA-Z_éèàçù\s]+$/).lowercase()
        .message({
            "string.empty": "Le nom du produit est obligatoire",
            "string.min": "Le nom du produit doit contenir au moins 3 caractères",  
            "string.max": "Le nom du produit doit contenir au plus 30 caractères",
            "string.regex": "Le nom du produit doit contenir uniquement des lettres et des underscores",
            "string.lowercase": "Le nom du produit doit être en minuscule",
        })
    })

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}

module.exports = { schemaCategorie, schemaProduit };


