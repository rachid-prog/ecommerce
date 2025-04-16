const express = require("express");
const router = express.Router({ mergeParams: true });

//Afficher tous les produits
router.get("/", require("../controllers/produits/getAllProduits"));

//Afficher un produit par son id
router.get("/:id", require("../controllers/produits/getProduitById"));

//Créer un produit
router.post("/", require("../controllers/produits/createProduit"));

//Mettre à jour un produit
router.put("/:id", require("../controllers/produits/updateProduit"));

//Supprimer un produit
router.delete("/:id", require("../controllers/produits/deleteProduit"));







module.exports = router;
