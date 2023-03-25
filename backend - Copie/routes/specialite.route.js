var express = require('express');
var router = express.Router();
const Specialite=require("../model/specialite");
// afficher la liste des specialites.
router.get('/', async (req, res, )=> {
    try {
        const spe = await Specialite.find();
        res.status(200).json(spe);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
        
});
// créer un nouvelle specialite
router.post('/', async (req, res) => {
const {nomspecialite} = req.body;
const newSpecialite = new Specialite({nomspecialite:nomspecialite})
try {
await newSpecialite.save();
res.status(200).json(newSpecialite);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// chercher une specialite 
router.get('/:specialiteId',async(req, res)=>{
    try {
        const spec = await Specialite.findById(req.params.specialiteId);
        res.status(200).json(spec);
         } 
         catch (error) {
        res.status(404).json({ message: error.message });
        }
});
// modifier une specialite
router.put('/:specialiteId', async (req, res)=> {
    const { nomspecialite} = req.body;
    const newSpecialite= new Specialite({ nomspecialite:nomspecialite})
    try {
    await newSpecialite.save();
    res.status(200).json(newSpecialite );
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
});
// Supprimer une specialite
router.delete('/:specialiteId', async (req, res)=> {
    try {const id = req.params.specialiteId;
        await Specialite.findByIdAndDelete(id);
        
        res.json({ message: "specialite deleted successfully." });
    } catch (error) {
        res.status(404).json({ message: error.message });
        }});
module.exports = router;
