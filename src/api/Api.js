import axios from "axios";
const options = {
  headers: {
    "X-RapidAPI-Key": "6c2a704035mshed3f3f412f5f9aap1c236bjsnbaf789e00c56",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
const Api = axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com",
});

// ================= Videos =====================

export const GetVideos = async (Term, currentPage = "CDIQAA") => {
  const response = await Api.get(
    `/search?q=${Term}&part=snippet%2Cid&maxResults=50&pageToken=${currentPage}`,
    {
      ...options,
    }
  );
  return await response.data;
};

export const GetVideoDetail = async (id) => {
  const response = await Api.get(
    `/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`,
    { ...options }
  );
  return await response.data;
};
export const GetVideoComment = async (id) => {
  const response = await Api.get(
    `commentThreads?part=snippet&videoId=${id}&maxResults=100`,
    { ...options }
  );
  return await response.data;
};
export const GetSuggestVideos = async (id, count) => {
  const response = await Api.get(
    `/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=${count}`,
    { ...options }
  );
  return await response.data;
};

// =================== channel===================

export const GetChannelDetail = async (id) => {
  const response = await Api.get(
    `/channels?part=snippet%2Cstatistics&id=${id}`,
    { ...options }
  );
  return await response.data;
};
export const GetChannelVidoes = async (id) => {
  const response = await Api.get(
    `/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`,
    { ...options }
  );
  return await response.data;
};
