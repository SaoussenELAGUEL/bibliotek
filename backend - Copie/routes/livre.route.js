var express = require('express');
var router = express.Router();
const Livre=require("../model/livre");
const Editeur=require("../model/editeur");
const Specialite=require("../model/specialite");
// afficher la liste des livres.
router.get('/', async (req, res, )=> {
   try {
        const liv = await Livre.find();
        res.status(200).json(liv);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        
});
// créer un nouveau livre
router.post('/', async (req, res) => {
const {isbn,titre, annedition, prix, qtestock, couverture, specialiteID, editeurID} = req.body;
const newLivre = new Livre({isbn:isbn, 
titre:titre,annedition:annedition,prix:prix,qtestock:qtestock, specialiteID:specialiteID,editeurID:editeurID})
try {
await newLivre.save();
res.status(200).json(newLivre);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// chercher une livre
router.get('/:livreId',async(req, res)=>{
 try {
  const liv = await Livre.findById(req.params.livreId);
  res.status(200).json(liv);
   } 
   catch (error) {
  res.status(404).json({ message: error.message });
  }
});
// modifier un livre
router.put('/:livreId', async (req, res)=> {
  const { isbn,titre, annedition, prix, qtestock, couverture, specialiteID, editeurID} = req.body;
  const newLivre = new Livre({ isbn:isbn, 
    titre:titre,annedition:annedition,prix:prix,qtestock:qtestock, specialiteID:specialiteID,editeurID:editeurID})
  try {
  await newLivre.save();
  res.status(200).json(newLivre );
  } catch (error) {
  res.status(404).json({ message: error.message });
  }
});
// Supprimer une catégorie
router.delete('/:livreId', async (req, res)=> {
  try {const id = req.params.livreId;
    await Livre.findByIdAndDelete(id);
    
    res.json({ message: "livre deleted successfully." });
} catch (error) {
    res.status(404).json({ message: error.message });
    }
});
module.exports = router;
