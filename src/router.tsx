import { createBrowserRouter } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import SignupPage from "@/pages/SignupPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign-up",
    element: <SignupPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/dashboard",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
