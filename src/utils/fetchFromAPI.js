import axios from "axios";

const base_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: base_URL,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
    maxResults: "10",
  },
  headers: {
    "X-RapidAPI-Key": "30bc6da899mshf62407362e46a99p11e963jsnacdf0d0fee60",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${base_URL}/${url}`, options);
  return data;
};
