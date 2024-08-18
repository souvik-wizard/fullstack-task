import mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const cardSchema = mongoose.Schema({
  id: {
    type: String,
    default: uuid,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Card", cardSchema);
