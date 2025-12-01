import mongoose, {Schema, Document} from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema: Schema<IUser> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match:[/^\S+@\S+\.\S+$/, "Email format is invalid"] },
  password: { type: String, required: true, minlenght:4, select: false }
});


export default mongoose.model<IUser>("User", UserSchema);
