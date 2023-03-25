const mongoose =require("mongoose")
const specialite = require("./specialite")
const editeur = require("./editeur")
const livreSchema=mongoose.Schema({
isbn:{ type: String, required: true,unique:true },
titre :{ type: String, required: false },
annedition :{ type: String, required: false },
prix :{ type: Number, required: false },
qtestock :{ type: Number, required: false },
couverture :{ type: String, required: false },
specialiteID: {type:mongoose.Schema.Types.ObjectId,
ref:specialite},
editeurID: {type:mongoose.Schema.Types.ObjectId,
ref:editeur}    
})
module.exports=mongoose.model('livre',livreSchema)
