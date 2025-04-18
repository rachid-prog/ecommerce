const express = require("express");
const router = express.Router();
const Categorie = require("../models/categorie");
const tokenCheck = require("../auth/tokenCheck");
const permession = require("../auth/permession");
const upload = require("../middleware/multer.config");

// Récupérer toutes les catégories
router.get("/",require("../controllers/categories/getAllCategories"));

//création d'une catégorie
router.post("/", require("../controllers/categories/createCategory"));

// Récupérer une catégorie par son id
router.get("/:id",require("../controllers/categories/getCategoryById"));

//supprimer une catégorie par son id
router.delete("/:id",require("../controllers/categories/deleteCategoryById"));

//mettre à jour une catégorie par son id
router.put("/:id",require("../controllers/categories/updateCategoryById"));






module.exports = router;
