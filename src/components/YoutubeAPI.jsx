import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const fetchVideos = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: "snippet",
        q: query,
        key: API_KEY,
        type: "video",
        maxResults: 12,
      },
    });
    console.log(response);
    return response.data.items;
  } catch (error) {
    console.error("Erreur lors de la récupération des vidéos :", error);
    return [];
  }
};
export default fetchVideos;
