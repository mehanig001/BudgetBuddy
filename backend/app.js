import express from "express";
import cors from "cors";
import { connectDB } from "./DB/Database.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";
import path from "path";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

connectDB();

// ---- ✅ CORS CONFIGURATION ----
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:5000",
  "https://budget-buddy-three-chi.vercel.app", // your Vercel frontend
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow no-origin (e.g. Postman, curl)
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // handle preflight requests
// ---- ✅ END CORS ----

// ---- Middleware ----
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ---- Routes ----
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

// ---- Test Route ----
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ---- Start Server ----
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
