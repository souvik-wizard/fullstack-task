import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cardsRoute from "./routes/index.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/test";
const app = Express();
app.use(
  Express.json({
    limit: "10mb",
  })
);
app.use(cors());

const connectDB = async (mongoURI) => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log(err);
  }
};

connectDB(DB_URI);

app.get("/", (req, res) => {
  res.json({
    message: "server is running",
  });
});
app.use("/api", cardsRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
