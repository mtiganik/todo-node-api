import mongoose, {Schema, Document} from "mongoose";

export interface ITodo extends Document {
  title: string;
  completed: boolean;
  userId: mongoose.Schema.Types.ObjectId;
}

const TodoSchema: Schema<ITodo> = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model<ITodo>("Todo", TodoSchema);
