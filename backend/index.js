import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOpt = {
  origin: ["http://localhost:5100"],
  credentials: true,
};
app.use(cors(corsOpt));

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "welcome to api",
    timestamp: new Date().toDateString(),
    success: true,
  });
});

const PORT = process.env.PORT || 5001;
//api's

app.use("/api/users", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/jobs", jobRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
