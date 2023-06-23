import { ANIME } from "@consumet/extensions";
import axios from "axios";
export const GetAnimeInfo = async (req, resp) => {
  const { provider, name } = req.params;
  // console.log(req.url);
  let providerInstance;

  try {
    const ProviderClass = ANIME[provider];
    if (!ProviderClass) {
      throw new Error("Invalid provider name");
    }
    providerInstance = new ProviderClass();
    const data = await providerInstance.search(`${name}`);

    return resp.status(200).json({
      data,
    });
  } catch (error) {
    return resp.status(400).json({
      success: false,
      message: "Invalid provider name",
    });
  }
};
