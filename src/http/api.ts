import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:3000", // Add to enviorment variable
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = (data: { email: string; password: string }) => {
  return api.post("/api/users/login", data);
};
