import mongoose from "mongoose";

const BoletimSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
