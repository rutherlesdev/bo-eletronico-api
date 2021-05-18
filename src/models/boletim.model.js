import mongoose from 'mongoose'

const BoletimSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true
    },
    person: [{
        name: String,
    }],
    objetos: [{
        tipo_objeto: { type: mongoose.Schema.ObjectId, ref: "object_category" },
        tipo_objeto_category: Number,
        qtd_objeto: Number,
        vlr_objeto: Number

    }]


  },
  {
    timestamps: true,
    strict: false //values added to our model instance that were not specified
  }
)

const Boletim = mongoose.model('boletim', UserSchema)
export default Boletim
