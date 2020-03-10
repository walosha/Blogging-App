import axios from "axios";

export const ibrandApi = axios.create({
  baseURL: "http://localhost:5000/api",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});
