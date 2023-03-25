const express=require('express');
const mongoose=require('mongoose');
const dotenv =require('dotenv');
const app = express();
const cors=require('cors');
dotenv.config()

const auteurRouter =require("./routes/auteur.route")
const editeurRouter =require("./routes/editeur.route")
const livreRouter =require("./routes/livre.route")
const specialiteRouter =require("./routes/specialite.route")
app.use(express.json()); 
app.use(cors());




mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});
app.use('/api/auteurs', auteurRouter);
app.use('/api/editeurs', editeurRouter);
app.use('/api/livres', livreRouter);
app.use('/api/specialites', specialiteRouter);
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); })
    