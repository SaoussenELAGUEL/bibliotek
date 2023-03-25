var express = require('express');
var router = express.Router();
const Auteur=require("../model/auteur"); 

// afficher la liste des auteurs.
router.get('/', async (req, res, )=> {
    try {
        const aut = await Auteur.find();
        res.status(200).json(aut);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }   
});
// créer un nouveau autheur
router.post('/', async (req, res) => {
const {nomauteur, emailaut, numtel} = req.body;
const newAuteur = new Auteur({nomauteur:nomauteur, 
emailaut:email,numtel:numtel})
try {
await newAuteur.save();
res.status(200).json(newAuteur);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// chercher un auteur
router.get('/:auteurId',async(req, res)=>{
    try {
        const aut = await Auteur.findById(req.params.auteurId);
        res.status(200).json(aut);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }

});
// modifier un auteur
router.put('/:auteurId', async (req, res)=> {
    const { nomauteur,emailaut, numtel} = req.body;
    const id = req.params.auteurId;
    try {
    const aut1 = { 
    nomauteur:nomauteur,emailaut:emailaut,numtel:numtel, _id:id };
    console.log(aut1)
    await Auteur.findByIdAndUpdate(id, aut1);
    res.json(aut1);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
    });
    
// Supprimer un auteur
router.delete('/:auteurId', async (req, res)=> {
    try {const id = req.params.auteurId;
        await Auteur.findByIdAndDelete(id);
        
        res.json({ message: "auteur deleted successfully." });
    } catch (error) {
        res.status(404).json({ message: error.message });
        } });
module.exports = router;
