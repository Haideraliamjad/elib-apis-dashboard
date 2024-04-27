import axios from "axios";
export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (data: { email: string; password: string }) => {
  return api.post("/api/users/login", data);
};

export const signup = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return api.post("/api/users/register", data);
};

export const getBooks = async () => {
  return api.get("/api/books");
};
export const createBook = async (data: FormData) =>
  api.post("/api/books/create", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
