var express = require('express');
var router = express.Router();
const Editeur=require("../model/editeur");
// afficher la liste des editeurs.
router.get('/', async (req, res, )=> {
    try {
        const ed = await Editeur.find();
        res.status(200).json(ed);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
});
// créer un nouveau editeur
router.post('/', async (req, res) => {
const {maisonedit, siteweb, emailed} = req.body;
const newEditeur = new Editeur({maisonedit:maisonedit, 
siteweb:siteweb,emailed:emailed})
try {
await newEditeur.save();
res.status(200).json(newEditeur);
} catch (error) {
res.status(404).json({ message: error.message });
}
});
// chercher un editeur
router.get('/:editeurId',async(req, res)=>{
    try {
        const ed = await Editeur.findById(req.params.editeurId);
        res.status(200).json(ed);
        } catch (error) {
        res.status(404).json({ message: error.message });
        }
});
// modifier un editeur
router.put('/:editeurId', async (req, res)=> {
    const { maisonedit, siteweb,emailed} = req.body;
    const id = req.params.editeurId;
    try {
    const ed1 = { maisonedit:maisonedit,  siteweb:siteweb,emailed:emailed, _id:id };
    console.log(ed1)
    await Editeur.findByIdAndUpdate(id, ed1);
    res.json(ed1);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }   
});
// Supprimer un editeur
router.delete('/:editeurId', async (req, res)=> {
    try {const id = req.params.editeurId;
        await Editeur.findByIdAndDelete(id);
        
        res.json({ message: "editeur deleted successfully." });
    } catch (error) {
        res.status(404).json({ message: error.message });
        }});
module.exports = router;
