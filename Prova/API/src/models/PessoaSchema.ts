import mongoose, { Schema } from "mongoose"

const pessoa = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O nome da pessoa é obrigatório!"],
    },
    cpf: {
      type: String,
      required: [true, "O cpf é obrigatório!"],
    },
    idade: {
      type: Number,
      required: [true, "A idade é obrigatório!"],
    },
    data: {
      type: Date,
      required: [true, "A data da locação é obrigatória"],
      min: ["2000-01-01", "Data mínima permitida: 01/01/2000"],
    },
    
    casa: { type: Schema.Types.ObjectId, ref: "Casa" },
  },
  {
    timestamps: true,
  }
);

var PessoaSchema = mongoose.model("Pessoa", pessoa);

export { PessoaSchema };