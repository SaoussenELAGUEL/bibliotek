const mongoose =require("mongoose")
const auteurSchema=mongoose.Schema({
nomauteur:{ type: String, required: true,unique:true },
emailaut :{ type: String, required: false },
numtel :{ type: Number, required: false }
})
module.exports=mongoose.model('auteur',auteurSchema)
 