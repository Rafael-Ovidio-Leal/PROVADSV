
import mongoose from "mongoose"
mongoose
.connect("mongodb+srv://prova:<prova>@cluster0.phjzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
{useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => {
    console.log("Aplicação conectada com o banco de dados");
})
.catch((erro) =>{
    console.log(`Erro ao conectar com o banco de dados: ${ erro }`)
});

export {mongoose};