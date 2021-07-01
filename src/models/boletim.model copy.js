import mongoose from "mongoose";

const BoletimSchema = new mongoose.Schema(
  {
    mike: { type: String,  default: "" },

    matricula: { type: String, default: "" },

    responsavel: { type: String, default: "" },
    endereco: { type: String, default: "" },
    date: { type: String, default: "" },
    hrregistro: { type: String, default: "" },
    dataFato: { type: String, default: "" },
    descr_natureza: { type: String, default: "" },
    tipoOcorr: { type: String, default: "" },
    gt: { type: String, default: "" },
    efetivo: { type: String, default: "" },
   
   
   
    pessoas: [ 
      
    
      {
        pai: { type: String, default: "" },
        nome: { type: String, default: "" },
        mae: { type: String, default: "" },
        idade_aparente: { type: String, default: "" },
        escolaridade: { type: String, default: "" },
        endereco: { type: String, default: "" },
        endereco_numero: { type: String, default: "" },
        endereco_complemeneto: { type: String, default: "" },
        naturalidade: { type: String, default: "" },
        rg: { type: String, default: "" },
        cpf: { type: String, default: "" },
        telefone: { type: String, default: "" },
        tipo: { type: String, default: "" },
      },
      
    ],
    objetos: [
      {
       
        tipo_objeto: { type: String, default: "" },
        qtd_objeto: { type: String, default: "" },
        vlr_objeto: { type: String, default: "" },
        envolvido: { type: String, default: "" },
        modelo: { type: String, default: "" },
        nserie: { type: String, default: "" },
        histórico: { type: String, default: "" },
      },
    ],
  },
  {
    timestamps: true,
    strict: false, // Novos conteúdos além dos que aqui especificados poderão ser adicionados
  }
);

const Boletim = mongoose.model("boletim", BoletimSchema);
export default Boletim;
