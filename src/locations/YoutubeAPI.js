import axios from "axios";
const KEY = "AIzaSyBID_yd9YmxN5RWDKOF2Y_q3mkBkZnFSNM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});