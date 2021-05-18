import mongoose from 'mongoose'

const BoletimSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true
    }
  },
  {
    timestamps: true,
    strict: false //values added to our model instance that were not specified
  }
)

const User = mongoose.model('User', UserSchema)
export default User
