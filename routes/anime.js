import { Router } from "express";
import { GetAnimeInfo } from "../controller/animeController.js";

export const anime = Router();

anime.get("/anime/search/:provider/:name", GetAnimeInfo);
anime.get("/anime/info/:provider/:id");
anime.get("/anime/episode/:provider/:id");
anime.get("/anime/watch/:provider/:id");
