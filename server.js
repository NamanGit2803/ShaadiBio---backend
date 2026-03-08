import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"
import cors from "cors";

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch(err => console.log(err));


app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// routes 
app.use(express.json());

app.use("/api/auth", authRoutes);



app.listen(5000, () => {
    console.log("Server running on port 5000");
});