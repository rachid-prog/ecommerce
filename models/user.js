const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nom: { type: String, required: [true, "Le nom est obligatoire"], trim: true, unique: [true, "Le nom doit être unique"],
        minlength: [3, "Le nom doit contenir au moins 3 caractères"],
        maxlength: [30, "Le nom doit contenir au plus 30 caractères"],
        regex: /^[a-zA-Z_éèàçù\s]+$/
    },
    email: { type: String, required: [true, "L'email est obligatoire"], trim: true, unique: [true, "L'email doit être unique"],
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password: { type: String, required: [true, "Le mot de passe est obligatoire"], trim: true,
        minlength: [8, "Le mot de passe doit contenir au moins 8 caractères"],
        maxlength: [64, "Le mot de passe doit contenir au plus 64 caractères"],
        match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    active: { type: Boolean, default: true },
    
}, { timestamps: true });



module.exports =  mongoose.model('User', userSchema)
