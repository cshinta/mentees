import axios from "axios";

const BASE_URL = "https://mentees-server.herokuapp.com";
const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: BASE_URL,
});

export default {
  get: async (route) => {
    const { status, data } = await instance.get(route);
    return { status, data };
  },

  getWithToken: async (route) => {
    const { status, data } = await instance.get(route, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { status, data };
  },

  post: async (route, req) => {
    const { status, data } = await instance.post(route, req);
    return { status, data };
  },

  postWithToken: async (route, req) => {
    const { status, data } = await instance.post(route, req, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { status, data };
  },
};
