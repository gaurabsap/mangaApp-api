import { Router } from "express";
import {
  GetChapterPage,
  GetMangaInfo,
  SearchManga,
} from "../controller/mangaController.js";

export const manga = Router();

manga.get("/manga/search/:name", SearchManga);
manga.get("/manga/info", GetMangaInfo);
manga.get("/manga/pages", GetChapterPage);
