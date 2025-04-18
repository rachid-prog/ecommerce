const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    nom: { type: String, required: [true, "Le nom est obligatoire"], trim: true,
        minlength: [3, "Le nom doit contenir au moins 3 caractères"],
        maxlength: [30, "Le nom doit contenir au plus 30 caractères"],
       validate: {
        validator: function(v) {
            return /^[a-zA-Z_éèàçù\s]+$/.test(v);
        },
        message: "Le nom doit contenir uniquement des lettres et des underscores"
       }
    },
    email: { type: String, required: [true, "L'email est obligatoire"], trim: true, unique: [true, "L'email doit être unique"],
        validate: {
            validator: validator.isEmail,
            message: "L'email est invalide"
        }
    },
    password: { type: String, required: [true, "Le mot de passe est obligatoire"], trim: true,
        minlength: [8, "Le mot de passe doit contenir au moins 8 caractères"],
        maxlength: [64, "Le mot de passe doit contenir au plus 64 caractères"],
        validate: {
            validator: function(v) {
                return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/.test(v);
            },
            message: "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial"
        }
       
    },
    role: { type: String, enum: ["admin", "user"], default: "user", 
        validate: {
            validator: function(v){
                return ["admin", "user"].includes(v);
            },
            message: "Le rôle doit être soit 'admin' soit 'user'"
        }
     },
    active: { type: Boolean, default: true },
    
   
    
    
}, { timestamps: true });



module.exports =  mongoose.model('User', userSchema)
