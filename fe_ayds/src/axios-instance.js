import axios from "axios";

const baseURL = "http://localhost:4000/";

const publicInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { publicInstance };
