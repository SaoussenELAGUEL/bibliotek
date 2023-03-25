const mongoose =require("mongoose")
const editeurSchema=mongoose.Schema({
maisonedit:{ type: String, required: true,unique:true },
siteweb:{ type: String, required: false },
emailed:{ type: String, required: false }
})
module.exports=mongoose.model('editeur',editeurSchema)
