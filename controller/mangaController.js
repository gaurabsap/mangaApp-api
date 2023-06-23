import { MANGA } from "@consumet/extensions";

export const SearchManga = async (resq, resp) => {
  const { name } = resq.params;
  try {
    const provider = new MANGA.MangaDex();

    const data = await provider.search(name);
    if (data) {
      return resp.status(200).json({
        data,
      });
    }
  } catch (error) {
    return resp.status(400).json({
      message: "Something wrong!!",
    });
  }
};

export const GetMangaInfo = async (resq, resp) => {
  const { infoId } = resq.query;
  //   console.log(infoId);
  try {
    const provider = new MANGA.MangaDex();
    const data = await provider.fetchMangaInfo(infoId);
    return resp.status(200).json({
      data,
    });
  } catch (error) {
    return resp.status(200).json({
      message: error.message,
    });
  }
};

export const GetChapterPage = async (resq, resp) => {
  const { chapterId } = resq.query;
  //   console.log(chapterId);

  try {
    const provider = new MANGA.MangaDex();
    const data = await provider.fetchChapterPages(chapterId);
    return resp.status(200).json({
      data,
    });
  } catch (error) {
    return resp.status(200).json({
      message: error.message,
    });
  }
};
