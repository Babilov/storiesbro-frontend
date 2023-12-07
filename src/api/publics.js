import axios from "axios";
import { API_URL } from "../constants/constatns";
const tokken = localStorage["token"];

export const get_list = () => {
  axios
    .get(`${API_URL}communities/list/`, {
      headers: { Authorization: `Bearer ${tokken}` },
    })
    .then(function (responce) {
      console.log(responce["data"]);
    });
};

export const add_public = (group_id, user_id) => {
  axios
    .post(`${API_URL}communities/addition/${group_id}/${user_id}/`)
    .then((res) => console.log(res));
};

export const get_statistic = (group_id, user_id) => {
  axios
    .get(`${API_URL}communities/statistics/${group_id}/${user_id}/`)
    .then((res) => console.log(res));
};
