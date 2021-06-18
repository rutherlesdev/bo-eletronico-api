import mongoose from 'mongoose'

const BoletimSchema = new mongoose.Schema(
  {
    mike: {
      type: String,
      index: true
    },
    matricula: {
      type: String,
      index: true
    },
    responsavel: String,
    endereco: String,
    date: Date,
    hrregistro: String,
    dataFato: Date,
    descr_natureza: String,
    pessoas: [
    {
        pai: String,
        mae: String,
        data_nascimento: String,
        idade_aparente: String,
        escolaridade: String,
        endereco: String,
        endereco_numero: String,
        endereco_complemeneto: String,
    } 
   ],
    objetos: [
      {
        tipo_objeto: { type: mongoose.Schema.ObjectId, ref: 'object_category' },
        tipo_objeto_category: Number,
        qtd_objeto: Number,
        vlr_objeto: Number
      }
    ]
  },
  {
    timestamps: true,
    strict: false // Novos conteúdos além dos que aqui especificados poderão ser adicionados
  }
)

const Boletim = mongoose.model('boletim', BoletimSchema)
export default Boletim
