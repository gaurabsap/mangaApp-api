import express from "express";
import cors from "cors";
import axios from "axios";
import { anime } from "./routes/anime.js";
import { manga } from "./routes/manga.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", anime);
app.use("/api/v1", manga);
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
