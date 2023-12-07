import axios from "axios";
import { API_URL } from "../constants/constatns";

const fetchCreatives = () => {
  axios.get(`${API_URL}creatives`).then((res) => {
    return res["data"];
  });
};

const fetchCreativesDetail = (id) => {
  axios.get(`${API_URL}creatives/${id}`).then((res) => {
    return res["data"];
  });
};

const fetchCreativesStatistic = (id) => {
  axios.get(`${API_URL}creatives/statistic/${id}`).then((res) => {
    return res["data"];
  });
};

const deleteCreative = (id) => {
  axios
    .post(`${API_URL}creatives/delete/${id}`)
    .then(() => console.log("deleted"));
};
